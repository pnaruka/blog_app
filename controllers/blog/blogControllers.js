const {Blog} = require("../../models/blog");
const { User } = require("../../models/user");


const createBlogView = async(req, res)=>{
    return res.render("addBlog", {
        user: req.user
    });
}
const createBlog = async(req, res)=>{
    const {title, body} = req.body;
    //console.log(req.user);
    const blog = await Blog.create({
        title,
        body,
        createdBy: req.user._id,
        coverImgUrl: `/uploads/${req.file.filename}`
    });
    //console.log(blog);
    return res.redirect(`/blog/${blog._id}`);
}

const showBlogs = async(req, res)=>{
    const allBlogs = await Blog.find({});
    return res.render("home",{
        user: req.user,
        blogs: allBlogs
    });
}

module.exports = {
    createBlogView,
    createBlog,
    showBlogs
}