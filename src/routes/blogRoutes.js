const express = require('express');

const blogController = require('../controllers/blogController.js')
const router = express.Router();


router.post('/blogs/create', blogController.createBlog);
router.get('/blogs', blogController.fetchBlog)
router.get('/blogs/:id',blogController.fetchSingleBlog)
router.delete('/blogs/delete/:id',blogController.deleteBlog)
router.put('/blogs/update/:id',blogController.findBlog)
module.exports = router;