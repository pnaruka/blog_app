const {Comment} = require('../../models/comment');

const createComment = async (req, res)=>{
    //console.log(req.body);
    
    await Comment.create({
        body: req.body.content,
        blogId: req.params.blogId,
        createdBy: req.user._id
    });
    return res.redirect(`/blog/${req.params.blogId}`);
};


module.exports = {
    createComment
}