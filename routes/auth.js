const express = require('express');
const router = express.Router();


const auth_controller = require('../controllers/auth');

// routes

router.post('/register-user', auth_controller.register_user);
router.post('/login-user', auth_controller.login_user);

router.post('/register-admin', auth_controller.register_admin);
router.post('/login-admin', auth_controller.login_admin);



module.exports = router;