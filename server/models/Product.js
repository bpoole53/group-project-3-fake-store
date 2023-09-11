

const { Schema, model } = require('mongoose');


const productSchema = new Schema ({
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
  }
});



const Product = model('Product', productSchema);

module.exports = Product