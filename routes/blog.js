const { Router } = require("express");
const { createBlog } = require("../controllers/blog/blogControllers");

const BlogRouter = Router();

BlogRouter.get('/add', createBlog);

module.exports = {
    BlogRouter
}