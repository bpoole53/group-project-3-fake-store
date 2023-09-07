

const express = require("express");
const router = express.Router();
const cartController = require('../../controllers/cart-controller')

//POST create a cart
router.post('/cart', cartController.createCart);

//PUT update cart by ID
router.put('/cart/:cartId', cartController.updateCartById);

//GET all carts
router.get('/carts', cartController.getAllCarts);

//GET single cart by ID
router.get('/cart/:cartId', cartController.getCartById); 

//DELETE cart by ID
router.delete('/cart/:cartId', cartController.deleteCart);


module.exports = router;