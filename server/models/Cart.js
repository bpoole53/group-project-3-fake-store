const { Schema, model } = require('mongoose');


const cartSchema = new Schema ({

})


const Cart = model('Cart', cartSchema);

module.exports = Cart