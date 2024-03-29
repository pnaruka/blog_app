const {Blog} = require("../../models/blog");
const { Comment } = require("../../models/comment");


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

const showThisBlog = async(req, res)=>{
    const {id} = req.params;
    const blog = await Blog.findById(id).populate("createdBy");
    const comments = await Comment.find({blogId: id}).populate("createdBy");
    //console.log(blog);
    return res.render("blog",{
        user: req.user,
        blog,
        comments
    });
}


const deleteBlog = async(req, res)=>{
    const {id} = req.params;
    await Blog.findByIdAndDelete(id);
    await Comment.deleteMany({blogId: id});

    return res.redirect("/");
}

module.exports = {
    createBlogView,
    createBlog,
    showBlogs,
    showThisBlog,
    deleteBlog
}