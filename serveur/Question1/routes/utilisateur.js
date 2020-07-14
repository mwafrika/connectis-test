const express = require('express');
const userController = require('../controller/ControllerUser');
const router = express.Router();

router
.post('/signup', userController.Signup)
.post('/signin', userController.SigninUser)
.post('/logout', userController.logout);
module.exports = router;