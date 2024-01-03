
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import User from '../models/UserModel.mjs';

passport.use(new LocalStrategy(User.authenticate()));

// Serialize user into session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user from session
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

export default passport;
