const express = require('express');
const router = express.Router();
const { createUser, updateUser, deleteUser, loginUser, logoutUser } = require('../../controllers/userController');
const auth = require('../../middlewares/auth');

router.post('/user', createUser);
router.put('/user', updateUser);
router.delete('/user', deleteUser);
router.get('/user/login', loginUser);
router.get('/user/logout', auth, logoutUser);


module.exports = router;