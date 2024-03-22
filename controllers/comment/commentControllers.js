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

const showComments = async (req, res)=>{
    const comments = await Comment.find({blogId:req.params.blogId});

    return res.render(`/blog/${req.params.blogId}`,{comments});
}

module.exports = {
    createComment,
    showComments
}