const {Router} = require("express");
const {login, signup, createUser, loginUser} = require("../controllers/user/userControllers")

const UserRouter = Router();

UserRouter.get('/login', login);

UserRouter.get('/signup', signup);

UserRouter.post('/signup', createUser);

UserRouter.post('/login', loginUser);

module.exports = {
    UserRouter
}