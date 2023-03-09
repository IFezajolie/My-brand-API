const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const User = require('../models/User');

// Middleware to authenticate requests
exports.authMiddleware = expressJwt({
  secret: 'your-secret-key', // replace with your own secret key
  algorithms: ['HS256'],
  getToken: (req) => req.cookies.token,
});

// Middleware to check if user exists in the database
exports.userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'User not found',
      });
    }
    req.profile = user;
    next();
  });
};
