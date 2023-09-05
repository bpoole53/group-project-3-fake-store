const User = require('../models/User')
const jwt = require('jsonwebtoken')
require('dotenv').config

//The user password is encrypted at the model level
async function createUser(req, res){
    try {
        const user = await User.create(req.body)
        const { password, ...modifiedUser } = user;
        //create the token that will be attached to the cookie
        const token = jwt.sign({
            email: user.email,
            id: user._id
        })
        res.cookie('auth-cookie', token).json({status: 'success', payload: modifiedUser})
    }   catch(err){
        console.log(err.message)  
        return res.status(400).json({ status: 'error', msg: `error creating user: ${err.message}`});
    }

}

async function authUser(req, res){
    let user
    try {
      user = await User.findOne({email: req.body.email})
    } catch(err){
      console.log(err.message)  
      return res.status(400).json({ status: 'error', msg: `error looking up user: ${err.message}`})
    }

    if (!user) return res.status(400).json({ message: 'unable to authenticate user'});

    const isValid = await user.verify(req.body.password)
    if(!isValid) return res.status(400).json({ message: 'unable to authenticate user'});

    const token = jwt.sign({
        email: user.email,
        id: user._id
    })

    const { password, ...modifiedUser } = user;
    res.cookie("auth-cookie", token).json({ status: "success", payload: modifiedUser })
}

async function verifyUser(req, res){
    const cookie = req.cookies["auth-cookie"]
    if( !cookie ) return res.status(401).json({msg: "un-authorized"})

    const isVerified = jwt.verify(cookie)
    if( !isVerified ) return res.status(401).json({msg: "un-authorized"})

    const user = await User.findOne({ _id: isVerified.id }).select("-password")
    if( !user ) return res.status(401).json({msg: "un-authorized"})
    
    return res.status(200).json({ status: "success", payload: user })
}

module.exports = {
    createUser,
    authUser,
    verifyUser
}