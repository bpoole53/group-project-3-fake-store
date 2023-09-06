

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
    default: 1, // Default quantity is 1
  },
  // 
});

const cartSchema = new Schema({
  items: [cartItemSchema], // integrate cartItemSchema
  total: {
    type: Number,
    required: true,
    default: 0, // Default total set to 0
  },
  // 
});

const Cart = model('Cart', cartSchema);

module.exports = Cart