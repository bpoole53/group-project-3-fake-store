
////NEED THIS HERE OR MONGOOSE ERROR
const mongoose = require('mongoose');

const { Schema, model } = require('mongoose');


const cartItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product', // Reference to the Product model
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1, // default user schema when product is added 
  },
});

const cartSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // reference to the User model
    required: true,
  },
  items: [cartItemSchema], 
  total: {
    type: Number,
    required: true,
    default: 0, // Default total set to 0
  },
});


//populates the product name
cartSchema.pre('find', function (next) {
  this.populate('items.product', 'name');
  next();
});


const Cart = model('Cart', cartSchema);

module.exports = Cart