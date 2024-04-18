const express = require('express');
const SignUp = require('../controllers/auth.controller');
const Login = require('../controllers/auth.controller');
const router = express.Router();

router.post('/Signup', SignUp);
router.post('/Login', Login);

module.exports = router;