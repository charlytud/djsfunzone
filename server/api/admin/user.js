const express = require('express');
const router = express.Router();
const { createUser, updateUser, deleteUser, loginUser, logoutUser } = require('../../controllers/userController');

router.post('/user', createUser);
router.put('/user', updateUser);
router.delete('/user', deleteUser);
router.get('/user/login', auth, loginUser);
router.get('/user/logout', auth, logoutUser);


module.exports = router;