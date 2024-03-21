const Comment = require('../../models/comment');

const createComment = async (req, res)=>{
    await Comment.create({
        body: req.body.body,
        blogId: req.params._id,
        createdBy: req.user._id
    });

    return res.redirect(`/blog/${req.params._id}`);
};

const showComments = async (req, res)=>{
    const comments = await Comment.find({blogId:req.params._id});

    return res.render(`/blog/${req.params._id}`,{comments});
}

module.exports = {
    createComment,
    showComments
}