const { Router } = require("express");
const { createBlog, createBlogView, showBlogs, showThisBlog } = require("../controllers/blog/blogControllers");
const multer = require("multer");
const path = require('path');

const BlogRouter = Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.resolve("./public/uploads/"));
    },
    filename: function(req, file, cb){
        const fileName = `${Date.now()}-${file.originalname}`;
        cb(null, fileName);
    }
})

const upload = multer({storage});
BlogRouter.get('/add', createBlogView);
BlogRouter.post('/add',upload.single('coverImg'), createBlog);
BlogRouter.get('/home',showBlogs);
BlogRouter.get('/:id', showThisBlog);

module.exports = {
    BlogRouter
}