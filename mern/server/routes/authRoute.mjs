
import express from 'express';
import * as authController from '../controllers/authController.mjs';

const router = express.Router();

// Handle user registration
router.post('/register', authController.registerUser);

// Handle login
router.post('/login', authController.loginUser, (req, res) => {
  // Return user information after successful login
  res.json({ success: true, user: req.user });
});

// Handle logout
router.get('/logout', authController.logoutUser);

// Check if the user is authenticated
router.get('/checkAuth', authController.checkAuthStatus);

export default router;
