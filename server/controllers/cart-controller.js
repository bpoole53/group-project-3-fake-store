

const User = require('../models/User');

const Product = require('../models/Product');


const cartController = {

  addProductToUserCart: async function(req, res) {
    console.log("cart route")
    const { userId } = req.params;
    const { productId, quantity } = req.body;
    console.log(`userId: ${userId}`);
    console.log(`productId: ${productId}`);
    
    try {
      const user = await User.findById(userId);
      if (!user) {
        console.log('User not found');
        return res.status(404).json({ message: 'User not found' });
      }
      const product = await Product.findById(productId);
      if (!product) {
        console.log('Product not found');
        return res.status(404).json({ message: 'Product not found' });
      }
      const cartItem = {
        product_name: product.name,
        quantity: quantity || 1, 
        productDetails: {
          price: product.price,
        },
      };
      user.cart.push(cartItem);
      await user.save();
      console.log('Product added to cart successfully');
      return res.status(201).json({ message: 'Product added to cart successfully' });
    } catch (error) {
      console.error('Error:', error);
      console.log(error)
      return res.status(500).json({ message: 'Internal server error' });
    }
  },

  getUserCart: async function(req, res) {
    const { userId } = req.params;
    console.log(`Retrieving cart for userID: ${userId}`);
    try {
      const user = await User.findById(userId);
      if (!user) {
        console.log('User not found');
        return res.status(404).json({ message: 'User not found' });
      }
      return res.status(200).json({ cart: user.cart });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },

  deleteUserCart: async function(req, res) {
    const { userId } = req.params;
    console.log(`Deleting cart for user with ID: ${userId}`);

    try {
      const user = await User.findById(userId);
      if (!user) {
        console.log('User not found');
        return res.status(404).json({ message: 'User not found' });
      }
      
      user.cart = [];

      await user.save();
      console.log('Cart deleted successfully');
      return res.status(200).json({ message: 'Cart deleted successfully' });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },
};


module.exports = cartController
  