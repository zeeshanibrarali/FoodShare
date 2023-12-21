// authRoute.mjs
import express from 'express';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import User from '../models/User'; // Assuming you have a User model

const router = express.Router();

// Local Login
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, async (email, password, done) => {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return done(null, false, { message: 'Incorrect email or password' });
    }

    const isPasswordValid = await user.validatePassword(password);

    if (!isPasswordValid) {
      return done(null, false, { message: 'Incorrect email or password' });
    }

    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));

// Google Login
passport.use(new GoogleStrategy({
  clientID: 'YOUR_GOOGLE_CLIENT_ID',
  clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
  callbackURL: 'YOUR_GOOGLE_CALLBACK_URL',
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const user = await User.findOne({ googleId: profile.id });

    if (user) {
      return done(null, user);
    }

    // Create a new user if not exists
    const newUser = new User({
      googleId: profile.id,
      email: profile.emails[0].value,
      // Add other required fields
    });

    await newUser.save();

    return done(null, newUser);
  } catch (error) {
    return done(error);
  }
}));

// Facebook Login
passport.use(new FacebookStrategy({
  clientID: 'YOUR_FACEBOOK_APP_ID',
  clientSecret: 'YOUR_FACEBOOK_APP_SECRET',
  callbackURL: 'YOUR_FACEBOOK_CALLBACK_URL',
  profileFields: ['id', 'displayName', 'photos', 'email'],
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const user = await User.findOne({ facebookId: profile.id });

    if (user) {
      return done(null, user);
    }

    // Create a new user if not exists
    const newUser = new User({
      facebookId: profile.id,
      email: profile.emails[0].value,
      // Add other required fields
    });

    await newUser.save();

    return done(null, newUser);
  } catch (error) {
    return done(error);
  }
}));

// Serialize and Deserialize User
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

// Local Login Route
router.post('/login', passport.authenticate('local'), (req, res) => {
  // Handle successful login
  res.json({ user: req.user });
});

// Google Login Route
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful Google login
    res.redirect('/dashboard');
  });

// Facebook Login Route
router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));

router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful Facebook login
    res.redirect('/dashboard');
  });

// Logout Route
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

export default router;
