const express = require('express');
const router = express.Router();
const { createUpdateCategory, deleteCategory } = require('../../controllers/categoryController');

router.post('/', createUpdateCategory);
router.put('/', createUpdateCategory);
router.delete('/', deleteCategory);


module.exports = router;