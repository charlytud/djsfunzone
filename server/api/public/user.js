const express = require('express');
const router = express.Router();
const { getUsers, getUserById } = require('../../controllers/userController');

router.get('/users', getUsers);
router.get('/user', getUserById);
// router.get('/fields', getProductByFields);

module.exports = router;