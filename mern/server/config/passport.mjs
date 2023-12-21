const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/User');

passport.use(new GoogleStrategy({
  // Google OAuth config
}, (accessToken, refreshToken, profile, done) => {
  // Check if user exists in the database, create if not
  // Call done() with the user object
}));

passport.use(new FacebookStrategy({
  // Facebook OAuth config
}, (accessToken, refreshToken, profile, done) => {
  // Check if user exists in the database, create if not
  // Call done() with the user object
}));
