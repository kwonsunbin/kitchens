const express = require('express');
const router = express.Router();
const { login, checkLogin } = require('../controllers/login');

router.route('/').post(login).get(checkLogin);

module.exports = router;
