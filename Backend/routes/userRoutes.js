const express = require('express');
const router = express.Router();
const { registerUser , getUser } = require('../controllers/userController');
// const {protect} = require('../middleware/authmiddleware')
// const { deleteAllData } = require('../controllers/userController');

// router.post('/signup', registerUser);

router.post('/login', getUser);
// router.delete('/deleteAllData', protect, deleteAllData);
// router.get('/me', protect)

module.exports = router;
