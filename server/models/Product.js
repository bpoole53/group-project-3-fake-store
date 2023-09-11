

const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  photo: {
    data: Buffer,
    contentType: String,
  },
});

///sets the price string with commas
productSchema.virtual('formattedPrice').get(function () {
  return this.price.toLocaleString();
});

const Product = model('Product', productSchema);

module.exports = Product

// const product = new Product({
//   name: 'Sample Product',
//   price: 1000000, // 1,000,000
// });

// /////TEST PASSED
// if (product.formattedPrice === '1,000,000') {
//   console.log('Test passed');
// } else {
//   console.error('Test failed');
// }
