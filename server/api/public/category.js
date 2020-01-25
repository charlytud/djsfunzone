const express = require('express');
const router = express.Router();
const { getCategories, getCategoryById } = require('../../controllers/categoryController');

router.get('/', getCategories);
router.get('/category', getCategoryById);

module.exports = router;