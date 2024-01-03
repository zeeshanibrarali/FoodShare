
import passport from '../config/passport.mjs';
import User from '../models/UserModel.mjs';

export const registerUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if the email is already registered
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        return res.status(400).json({ error: 'Email is already registered' });
      }
  
      // Create a new user
      const newUser = new User({ email });
      await newUser.setPassword(password);
      await newUser.save();
  
      // Log in the newly registered user
      req.login(newUser, (err) => {
        if (err) {
          console.error('Error during login after registration:', err);
          return res.status(500).json({ error: 'Internal server error' });
        }
        res.json({ success: true });
      });
    } catch (error) {
      console.error('Error during user registration:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
// Handle login
export const loginUser = passport.authenticate('local');

// Handle logout
export const logoutUser = (req, res) => {
  req.logout();
  res.json({ success: true });
};

// Check if the user is authenticated
export const checkAuthStatus = (req, res) => {
  res.json({ isAuthenticated: req.isAuthenticated(), user: req.user });
};
