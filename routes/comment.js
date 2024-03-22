const { Router } = require("express");
const { createComment, showComments } = require("../controllers/comment/commentControllers");

const CommentRouter = Router();

CommentRouter.post('/add', createComment);
CommentRouter.get('/show', showComments);

module.exports = {
    CommentRouter
}