const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

// POST /api/auth/signup
router.post('/signup', authController.signup);

// POST /api/auth/login
router.post('/login', authController.login);

// GET /api/auth/logout
router.get('/logout', authController.logout);

module.exports = router;
