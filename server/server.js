

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const db = require('./config/connection');
const routes = require('./routes');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3001;

//  MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/fake-store', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const dbConnection = mongoose.connection;

dbConnection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

dbConnection.once('open', () => {
  console.log('Connected to MongoDB database.');

  // Express server 
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes);

app.use('/', routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client/build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'client/build/index.html'));
  });
}