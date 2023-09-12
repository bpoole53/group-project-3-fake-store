

const router = require('express').Router();

// Import any controllers needed here
const { register, login, verify } = require('../../controllers/auth-controller');

router.post("/register", async (req, res) => {
  const { status, token, user } = await register(req)
  res.cookie("auth-cookie", token).json({ status: "success", payload: user })
})

// router.route("/login").post(login);


router.post("/login", async(req, res) => {
  try {
    const { token, user } = await login(req)
    return res.cookie("auth-cookie", token).json({ status: "success", payload: user })
  } catch (err) {
    return res.status(400).json({error: err})
  }
})

router.post("/verify", async (req, res) => {
  const { status, user } = await verify(req)
  res.json({ status: "success", payload: user })
})

module.exports = router;
