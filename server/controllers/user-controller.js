const User = require('../models/User')
const jwt = require('jsonwebtoken')
require('dotenv').config


const userController = {
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            const { password, ...modifiedUser } = user;
            // Create the token that will be attached to the cookie
            const token = jwt.sign({
                email: user.email,
                id: user._id
            }, process.env.JWT_SECRET); ///jwt SECRET

            res.cookie('auth-cookie', token).json({ status: 'success', payload: modifiedUser });
        } catch (err) {
            console.error(err.message);
            return res.status(400).json({ status: 'error', msg: `Error creating user: ${err.message}` });
        }
    },

    async authUser(req, res) {
        let user;
        try {
            user = await User.findOne({ email: req.body.email });
        } catch (err) {
            console.error(err.message);
            return res.status(400).json({ status: 'error', msg: `Error looking up user: ${err.message}` });
        }

        if (!user) return res.status(400).json({ message: 'Unable to authenticate user' });

        const isValid = await user.verify(req.body.password);
        if (!isValid) return res.status(400).json({ message: 'Unable to authenticate user' });

        const token = jwt.sign({
            email: user.email,
            id: user._id
        }, process.env.JWT_SECRET); // Add your JWT secret here

        const { password, ...modifiedUser } = user;
        res.cookie("auth-cookie", token).json({ status: "success", payload: modifiedUser });
    },

    async verifyUser(req, res) {
        const cookie = req.cookies["auth-cookie"];
        if (!cookie) return res.status(401).json({ msg: "Unauthorized" });

        try {
            const isVerified = jwt.verify(cookie, process.env.JWT_SECRET); // Add your JWT secret here
            if (!isVerified) return res.status(401).json({ msg: "Unauthorized" });

            const user = await User.findOne({ _id: isVerified.id }).select("-password");
            if (!user) return res.status(401).json({ msg: "Unauthorized" });

            return res.status(200).json({ status: "success", payload: user });
        } catch (err) {
            console.error(err.message);
            return res.status(401).json({ msg: "Unauthorized" });
        }
    }
};

module.exports = userController;