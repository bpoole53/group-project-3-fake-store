

const User = require('../models/User');

const Product = require('../models/Product');


const cartController = {

  async addProductToUserCart(req, res) {
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
      return res.status(500).json({ message: 'Internal server error' });
    }
  },
};


module.exports = cartController
  