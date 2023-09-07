

const { User } = require('../models');
const { create, find, findOne } = require("./user-controller")
const jwt = require("jsonwebtoken");
require("dotenv").config()

function signToken(user){
  return jwt.sign({ email: user.email, id: user._id}, process.env.JWT_SECRET)
}

async function register(req) {
  let user 

  // use the create method on the User controller to first create the user
  try {
    user = await create(req.body)
  } catch(err){
    //if( process.env.NODE_ENV === "development") console.log(err)
    //throw err
  }

  const token = signToken(user)

  const { password, ...modifiedUser } = user;
  return { status: "success", token, user: modifiedUser }
}


async function login(req) {
  let user

  // TODO: use the find method on the User controller to first find the user based on the email submitted


  if( !user ) return { status: "error", msg: "could not authentixate" }

  // TODO: call the verify() instance method in the User model to be sure the password is legit

  if( !passwordIsValid ) return { status: "error", msg: "could not authentixate" }

  const token = signToken(user)

  const { password, ...modifiedUser } = user;
  return { status: "success", token, user: modifiedUser }
}


async function verify(req){
  const cookie = req.cookies["auth-cookie"]
  if( !cookie ) return { status: "error", msg: "unauthorized" }

  const decryptCookie = jwt.verify(cookie, process.env.JWT_SECRET)
  if( !decryptCookie ) return { status: "error", msg: "unauthorized" }

  // use the findOne method on the user controller to look up the user by the id returned from verifying the token
  
  if( !foundUser ) return { status: "error", msg: "unauthorized" }
  
  return { status: "success", user:foundUser }
}

module.exports = {
  register,
  login,
  verify
}
