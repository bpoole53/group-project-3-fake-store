

const User = require('../models/User')
const jwt = require('jsonwebtoken')
require('dotenv').config()


const userController = {

    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            const token = jwt.sign({
                email: user.email,
                id: user._id
            }, process.env.JWT_SECRET, {expiresIn: 60 * 60}); ///jwt SECRET

            const { password, ...modifiedUser } = user._doc;
            res.cookie('auth-cookie', token).status(200).json({ status: 'success', payload: modifiedUser });
            console.log(user)
            // return res.status(200).json({ status: 'success', payload: user });
            // res.json(user);
            
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
            return res.status(500).json({ status: 'error', msg: 'Server error' });
        }
    
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
    
        const isValid = await user.verify(req.body.password);
    
        if (!isValid) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
    
        // Generate a JWT token
        const token = jwt.sign({
            email: user.email,
            id: user._id
        }, process.env.JWT_SECRET, {expiresIn: 60 * 60});
    
        res.cookie('auth-cookie', token, { httpOnly: true, secure: true }); 
    
        // return JSON response with the authenticated user data (excluding password)
        const { password, ...authenticatedUser } = user;
        return res.status(200).json({ status: 'success', payload: authenticatedUser });
    },


    async verifyUser(req, res) {
        const cookie = req.cookies["auth-cookie"];
    
        if (!cookie) {
            return res.status(401).json({ msg: "Unauthorized" });
        }
    
        try {
            const isVerified = jwt.verify(cookie, process.env.JWT_SECRET);
    
            if (!isVerified) {
                return res.status(401).json({ msg: "Unauthorized" });
            }
    
            // grab the user data from the database using user id
            const user = await User.findOne({ _id: isVerified.id }).select("-password");
    
            if (!user) {
                return res.status(401).json({ msg: "Unauthorized" });
            }
    
            // Return a JSON response with the verified user data
            return res.status(200).json({ status: "success", payload: user });
        } catch (err) {
            console.error(err.message);
            return res.status(401).json({ msg: "Unauthorized" });
        }
    },

     
   

  updateUserById: async (req, res) => {
    const userId = req.params.id;
    const updates = req.body;
    try {
      const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ status: 'error', msg: 'User not found' });
      }
      const { password, ...modifiedUser } = updatedUser;
      return res.status(200).json({ status: 'success', payload: modifiedUser });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ status: 'error', msg: 'Internal Server Error' });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      const modifiedUsers = users.map((user) => {
        const { password, ...modifiedUser } = user.toObject();
        return modifiedUser;
      });
      return res.status(200).json({ status: 'success', payload: modifiedUsers });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ status: 'error', msg: 'Internal Server Error' });
    }
  },

  deleteUserById: async (req, res) => {
    const userId = req.params.id;
    try {
      const deletedUser = await User.findByIdAndRemove(userId);
      if (!deletedUser) {
        return res.status(404).json({ status: 'error', msg: 'User not found' });
      }
      const { password, ...modifiedUser } = deletedUser;
      return res.status(200).json({ status: 'success', payload: modifiedUser });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ status: 'error', msg: 'Internal Server Error' });
    }
  },

  getUserById: async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ status: 'error', msg: 'User not found' });
      }
      const { password, ...modifiedUser } = user.toObject();
      return res.status(200).json({ status: 'success', payload: modifiedUser });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ status: 'error', msg: 'Internal Server Error' });
    }
  },
};


module.exports = userController;