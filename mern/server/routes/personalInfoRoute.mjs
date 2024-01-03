
import express from 'express';
import User from '../models/UserModel.mjs';

const router = express.Router();

// Middleware to check authentication
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login'); // Redirect to login if not authenticated
};

// Route to handle personal information submission
router.post('/submitPersonalInfo', isAuthenticated, async (req, res) => {
  console.log('Reached /personal-info/submitPersonalInfo route');
  try {
    const userId = req.user.id;

    // Update the user document with the submitted personal information
    await User.findByIdAndUpdate(userId, req.body, { new: true });

    res.redirect('/dashboard');
    res.status(200).send('Personal information submitted successfully');
  } catch (error) {
    console.error('Error submitting personal information:', error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;
