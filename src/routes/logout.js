const express = require('express');
const router = express.Router();

// Route for user logout
router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/login');
});

module.exports = router;
