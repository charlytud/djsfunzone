const express = require('express');
const router = express.Router();
const { createProduct, updateProduct, deleteProduct } = require('../../controllers/productController');

router.post('/product', createProduct);
router.put('/product', updateProduct);
router.delete('/product', deleteProduct);


module.exports = router;