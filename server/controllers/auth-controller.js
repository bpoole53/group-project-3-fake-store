

const { create, find, findOne } = require("./user-controller");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt"); 
require("dotenv").config();
const User = require('../models/User')

function signToken(user) {
  return jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, {expiresIn: 60 * 60});
}

async function register(req) {
  let user;

  try {
    // Use the create method on the User controller to first create the user
    user = await create(req.body);
  } catch (err) {
    if (process.env.NODE_ENV === "development") console.log(err);
    return { status: "error", msg: "Registration failed" };
  }

  const token = signToken(user);

  const { password, ...modifiedUser } = user._doc;


  return { status: "success", token, user: modifiedUser };
}

async function login(req, res) {
  let user;

  try {
    // Use the find method on the User controller to find the user based on the email submitted
    user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json({ status: "error", msg: "Authentication failed" });
    }

    const passwordIsValid = await bcrypt.compare(req.body.password, user.password);    
    
    if (!passwordIsValid) {
      console.log(passwordIsValid)
      return res.status(400).json({ status: "error", msg: "Authentication failed" });
    } else {
      console.log(passwordIsValid)
    }

    const token = signToken(user);
   
    const { password, ...modifiedUser } = user._doc;  //user._doc
    
    return res.cookie("auth-cookie", token).json({ status: "success", token, payload: modifiedUser });
  } catch (error) {
    return res.status(400).json({ status: "error", msg: "Authentication failed" });
  }
}

async function verify(req) {
  const cookie = req.cookies["auth-cookie"];
  if (!cookie) {
    return { status: "error", msg: "Unauthorized" };
  }

  try {
    const decryptCookie = jwt.verify(cookie, process.env.JWT_SECRET);

    // Use the findOne method on the user controller to look up the user by the id returned from verifying the token
    const foundUser = await findOne({ _id: decryptCookie.id });

    if (!foundUser) {
      return { status: "error", msg: "Unauthorized" };
    }

    return { status: "success", user: foundUser };
  } catch (error) {
    return { status: "error", msg: "Unauthorized" };
  }
}

module.exports = {
  register,
  login,
  verify
};