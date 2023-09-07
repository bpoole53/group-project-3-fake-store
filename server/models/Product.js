

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
  //photo: {
  // data: Buffer, // Binary data for the image
  //contentType: String, e.g., image/jpeg, image/png)
  //}
});



const Product = model('Product', productSchema);

module.exports = Product