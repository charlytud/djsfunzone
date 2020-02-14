const express = require('express');
const router = express.Router();
const { createUser, updateUser, deleteUser } = require('../../controllers/userController');

router.post('/user', createUser);
router.put('/user', updateUser);
router.delete('/user', deleteUser);


module.exports = router;