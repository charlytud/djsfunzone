const express = require('express');
const router = express.Router();
const { createUpdateProduct, deleteProduct } = require('../../controllers/productController');

router.post('/', createUpdateProduct);
router.delete('/', deleteProduct);


module.exports = router;