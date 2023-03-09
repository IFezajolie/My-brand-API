const User = require('../models/User');
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