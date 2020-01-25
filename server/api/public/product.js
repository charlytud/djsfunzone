const express = require('express');
const router = express.Router();
const { getProducts, getProductById, getProductByFields } = require('../../controllers/productController');

router.get('/', getProducts);
router.get('/product', getProductById);
router.get('/fields', getProductByFields);

module.exports = router;