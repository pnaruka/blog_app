const {Router} = require("express");
const {login, signup, createUser} = require("../controllers/user/userControllers")

const UserRouter = Router();

UserRouter.get('/login', login);

UserRouter.get('/signup', signup);

UserRouter.post('/signup', createUser);

module.exports = {
    UserRouter
}