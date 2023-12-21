const express = require('express');
const passport = require('passport');
const authController = require('../controllers/authController');

const router = express.Router();

// Manual Registration and Login
router.post('/register', authController.register);
router.post('/login', authController.login);

// Third-party OAuth (Google)
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), authController.socialLoginCallback);

// Third-party OAuth (Facebook)
router.get('/facebook', passport.authenticate('facebook', { scope: ['public_profile', 'email'] }));
router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), authController.socialLoginCallback);

module.exports = router;
