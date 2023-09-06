
const mongoose = require('mongoose');

const db = mongoose.connection;

const MONGODB_URI = 'mongodb://127.0.0.1:27017/fake-store'; 

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/fake-store', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB database.');
});

module.exports = db;