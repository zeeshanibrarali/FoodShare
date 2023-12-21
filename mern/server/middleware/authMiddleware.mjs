exports.isAuthenticated = (req, res, next) => {
    // Middleware to check if the user is authenticated
    if (req.isAuthenticated()) {
      return next();
    }
    res.status(401).json({ message: 'Unauthorized' });
  };
  