


const express = require("express");
const router = express.Router();
const cartController = require('../../controllers/cart-controller')

//http://localhost:3001/api/cart

// POST add product to the user's cart
router.post('/:userId/', cartController.addProductToUserCart)

module.exports = router;