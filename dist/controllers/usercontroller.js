const User = require('../models/User');
const bcrypt = require('bcryptjs');
jwt = require('jsonwebtoken');
const register = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        error: err
      });
    }
  });
};
exports.signup = async (req, res) => {
  const {
    email,
    password,
    name
  } = req.body;
  try {
    const user = await User.create({
      email,
      password,
      name
    });
    res.status(201).json({
      message: 'User created successfully',
      user
    });
  } catch (err) {
    res.status(400).json({
      message: err.message
    });
  }
};