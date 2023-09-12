

const db = require('../config/connection');
const dbClean = require('./dbClean');
const { Product, User } = require('../models');

const productData = require('./productData.json');
const userData = require('./userData.json');

db.once('open', async () => {
    await dbClean('Product', 'products');
    await dbClean('User', 'users');

    await Product.insertMany(productData);
    console.log('Products seeded!');

    await User.insertMany(userData);
    console.log('Users and Carts seeded!');

    process.exit(0);
});