


const express = require("express");
const router = express.Router();
const cartController = require('../../controllers/cart-controller')


//GET single cart by ID
router.get('/users/:userId/carts', cartController.getCartsByUserId);


module.exports = router;