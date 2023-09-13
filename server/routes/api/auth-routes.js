

const router = require('express').Router();
const authController = require('../../controllers/auth-controller');

// Import any controllers needed here
const { register, login, verify } = require('../../controllers/auth-controller');

router.post("/register", async (req, res) => {
  const { token, user } = await register(req)
  res.cookie("auth-cookie", token).json({ status: "success", payload: user })
})

router.post("/login", authController.login) 


router.post("/verify", async (req, res) => {
  const { user } = await verify(req)
  res.json({ status: "success", payload: user })
})

module.exports = router;
