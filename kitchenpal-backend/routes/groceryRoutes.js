// routes/groceryRoutes.js
const express = require('express');
const router = express.Router();
const { addGrocery, getGroceries, getNearExpiryItems } = require('../controllers/groceryController');

router.post('/', addGrocery);
router.get('/', getGroceries);
router.get('/near-expiry', getNearExpiryItems);

module.exports = router;
