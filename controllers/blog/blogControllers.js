const {Blog} = require("../../models/blog");

const createBlog = async(req, res)=>{
    return res.render("addBlog", {
        user: req.user
    });
}

module.exports = {
    createBlog
}