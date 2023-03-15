// const express = require('express');
// const router = express.Router();
// const { login } = require('../controllers/authController');

// router.post('/login', login);

// module.exports = router;

// //Route for user profile
// const express = require('express');
// const router = express.Router();
// const { authMiddleware, userById } = require('../middlewares/auth');
// const { getProfile } = require('../controllers/user');

// // Protected route that requires authentication
// router.get('/profile/:userId', authMiddleware, getProfile);

// // Middleware to retrieve user by ID
// router.param('userId', userById);

// module.exports = router;

const express = require('express');
const router = express.Router();
const { 
    login 
} = require('../controllers/usercontroller');
const { authMiddleware, 
    userById 
} = require('../middlewares/auth');
const { getProfile } = require('../controllers/user');
const userRoutes = require('./userRoutes');
const { auth } = require('./auth');



router.use(userRoutes);

router.post('/login', login);

router.get('/profile/:userId', auth.authMiddleware, getProfile);
router.param('userId', auth.userById);

module.exports = router;
