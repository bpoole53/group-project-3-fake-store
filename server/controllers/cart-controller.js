

const Cart = require('../models/User')

const cartController = {

  createCart: async (req, res) => {
    try {
      const newCart = new Cart(req.body);
      const savedCart = await newCart.save();
      res.status(201).json(savedCart);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateCartById: async (req, res) => {
    try {
      const cartId = req.params.cartId;
      const updatedCart = await Cart.findByIdAndUpdate(cartId, req.body, {
        new: true,
      });
      res.json(updatedCart);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getAllCarts: async (req, res) => {
    try {
      const carts = await Cart.find();
      res.json(carts);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getCartById: async (req, res) => {
    try {
      const cartId = req.params.cartId;
      const cart = await Cart.findById(cartId);
      if (!cart) {
        return res.status(404).json({ error: 'Cart not found' });
      }
      res.json(cart);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteCart: async (req, res) => {
    try {
      const cartId = req.params.cartId;
      const deletedCart = await Cart.findByIdAndDelete(cartId);
      if (!deletedCart) {
        return res.status(404).json({ error: 'Cart not found' });
      }
      res.json(deletedCart);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
}

module.exports = cartController
  