const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Authenticate a user
const protect = async (req, res, next) => {

  // Looks for the Authorization header in the request
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Not authorized" });

  try {

    // Verifies the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user in the database and attach the user in the request
    req.user = await User.findById(decoded.id).select('-password');

    next();
  } catch (error) {
    res.status(401).json({ message: "Not authorized" });
  }
};

module.exports = { protect };
