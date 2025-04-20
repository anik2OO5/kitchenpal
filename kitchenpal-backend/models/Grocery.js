// models/Grocery.js
const mongoose = require('mongoose');

const grocerySchema = new mongoose.Schema({
  itemName: String,
  quantity: Number,
  expiryDate: Date,
  addedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Grocery', grocerySchema);
