const express = require('express');
const { signup, login } = require('../controller/authController');
const authCheck = require('../controller/authCheck');
const userCheck = require('../controller/authUser');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/check-auth',authCheck)
router.get('/user',userCheck)
module.exports = router;