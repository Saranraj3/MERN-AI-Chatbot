const express = require('express');
const UserSignupController = require('../Controller/Signup');
const UserLoginController = require('../Controller/Login');
const router = express.Router();

router.post('/signup', UserSignupController)
router.post('/login', UserLoginController)


module.exports = router;
