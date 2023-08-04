const express = require('express');
const router = express.Router();
const { registerUser , getUser } = require('../controllers/userController');
const {protect} = require('../middleware/authmiddleware')

router.post('/signup', registerUser);

router.get('/login', getUser);

router.get('/me', protect)

module.exports = router;
