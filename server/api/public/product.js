const express = require('express');
const router = express.Router();
const { getProducts, getProductById } = require('../../controllers/productController');

router.get('/products', getProducts);
router.get('/product', getProductById);
// router.get('/fields', getProductByFields);

module.exports = router;