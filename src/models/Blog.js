const mongoose = require ('mongoose');
const fs = require ('fs');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
  
        image: {
            data: Buffer,
            contentType: String,
    },
    body: {
        type: String,
        required: true, 
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const Blog = mongoose.model('Blog',blogSchema);
module.exports = Blog;