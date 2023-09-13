

const mongoose = require('mongoose');

module.exports = async (modelName, collectionName) => {
  try {
    const Model = mongoose.model(modelName);
    await Model.deleteMany({});
    console.log(`Collection ${collectionName} wiped.`);
  } catch (err) {
    throw err;
  }
};