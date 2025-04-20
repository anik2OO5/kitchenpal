// controllers/groceryController.js
const Grocery = require('../models/Grocery');

exports.addGrocery = async (req, res) => {
  try {
    const grocery = new Grocery(req.body);
    await grocery.save();
    res.status(201).json(grocery);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getGroceries = async (req, res) => {
  try {
    const groceries = await Grocery.find().sort({ expiryDate: 1 });
    res.json(groceries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get items that are about to expire in the next 3 days

exports.getNearExpiryItems = async (req, res) => {
    try {
      const today = new Date();
      const next3Days = new Date();
      next3Days.setDate(today.getDate() + 3);
  
      const items = await Grocery.find({
        expiryDate: { $gte: today, $lte: next3Days }
      }).sort({ expiryDate: 1 });
  
      res.json(items);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  