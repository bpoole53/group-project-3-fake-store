const db = require('../config/connection');

const dbClean = require('./dbClean');
import {Cart,Product,User} from '../models'

const productData = require('./productData.json')
const userData = require('./userData.json')

db.('open', async () => {
    await cleanDB('Product', 'products');
    await cleanDB('User', 'users');
  
    await Product.insertMany(productData);
  
    console.log('Products seeded!');
    
    await User.insertMany(userData);
    console.log('Users seeded!');

    
    process.exit(0);
  });