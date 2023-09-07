

const { create, find, findOne } = require("./user-controller");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt"); 
require("dotenv").config();

function signToken(user) {
  return jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET);
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

  const { password, ...modifiedUser } = user;

  return { status: "success", token, user: modifiedUser };
}

async function login(req) {
  let user;

  try {
    // Use the find method on the User controller to find the user based on the email submitted
    user = await find({ email: req.body.email });
    
    if (!user) {
      return { status: "error", msg: "Authentication failed" };
    }

    // Call the verify() instance method in the User model to be sure the password is legit
    const passwordIsValid = await user.verify(req.body.password);
    
    if (!passwordIsValid) {
      return { status: "error", msg: "Authentication failed" };
    }

    const token = signToken(user);

    const { password, ...modifiedUser } = user;
    return { status: "success", token, user: modifiedUser };
  } catch (error) {
    return { status: "error", msg: "Authentication failed" };
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