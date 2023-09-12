

const User = require('../models/User')

const cartController = {

  getCartsByUserId: async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      const carts = user.cart; 
      res.json(carts);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

}


module.exports = cartController
  