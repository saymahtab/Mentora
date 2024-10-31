const express = require('express');
const { getMe, signup, login, logout } = require('../controllers/auth.controller');
const { protectRoute } = require('../middlewares/protectRoute');

const authRoutes = express.Router();

// Auth Routes
authRoutes.get('/me', protectRoute, getMe);
authRoutes.post('/signup', signup);
authRoutes.post('/login', login);
authRoutes.post('/logout', logout);

module.exports = {
    authRoutes,
};
