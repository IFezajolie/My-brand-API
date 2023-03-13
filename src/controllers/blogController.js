const Blog = require('../models/Blog.js');

const createBlog = async(req,res)=>{
    const newBlogpost = req.body;
    try {
        if(!(newBlogpost)){
            res.status(400).json({'status': 'fail','code': 400,'message' : "Please fill all required data", "data": null});
            return;
        }
        const newBlog = await Blog.create([newBlogpost]);
        res.status(200).json({'status': 'successful','code': 200,'message': "Successful", data: newBlog});
    } catch (error) {
        console.log(error);
        res.status(500).json({'status': 'fail','code': 500,'message': "Server error", "data": null});
   
    }
} 
const fetchBlog = async(req,res)=>{
    const allBlogs = req.body
    try {
        if(!allBlogs){
            res.status(400).json({'status': 'fail','code': 400,'message' : "No Blog", "data": null});
            return 
    
        }
        const Blogs = await Blog.find({});
        res.status(200).json({'status': 'successful','code': 200,'message': "Successful", data: Blogs});
    } catch (error) {
        console.log(error);
        res.status(500).json({'status': 'fail','code': 500,'message': "Server error", "data": null});
   
    }
}
const fetchSingleBlog = async(req,res)=>{
    try {
        const {id} = req.params
        const blog = await Blog.findOne({_id: id})
        if (!blog){
            return res.status(400).json({'status': 'fail','code': 400,'message' : "No Blog", "data": null});
        }
        return res.status(200).json({'status': 'successful','code': 200,'message': "Successful", data: blog});
    } catch (error) {
        console.log(error);
        res.status(500).json({'status': 'fail','code': 500,'message': "Server error", "data": null});
   
    }
}

const deleteBlog = async(req,res)=>{
    try {
        const {id} = req.params
        const _id = id
        const blogToDelete = await Blog.findByIdAndDelete(_id)
        if (!blogToDelete){
            return res.status(400).json({'status': 'fail','code': 400,'message' : "No Blog", "data": null});
        }
        return res.status(200).json({'status': 'successful','code': 200,'message': "Deleted Successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({'status': 'fail','code': 500,'message': "Server error", "data": null});
   
    }
}

const findBlog = async(req,res)=>{
    try {
        const {id} = req.params
        const {title,body} = req.body
        const _id = id
        const blogUpdated = await Blog.findByIdAndUpdate(_id,{title,body})
        if (!blogUpdated){
            return res.status(400).json({'status': 'fail','code': 400,'message' : "No Blog", "data": null});
        }
        return res.status(200).json({'status': 'successful','code': 200,'message': "Updated Successfully", data: blogUpdated});
    } catch (error) {
        console.log(error);
        res.status(500).json({'status': 'fail','code': 500,'message': "Server error", "data": null});
   
    }
}

module.exports = {createBlog,fetchBlog,fetchSingleBlog,deleteBlog,findBlog};