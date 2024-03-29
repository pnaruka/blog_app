const { Router } = require("express");
const { createComment, showComments } = require("../controllers/comment/commentControllers");

const CommentRouter = Router();

CommentRouter.post('/add/:blogId', createComment);

module.exports = {
    CommentRouter
}