const {Router} = require("express");
const {login, signup, createUser, loginUser, logoutUser} = require("../controllers/user/userControllers");
const { homeRedirect } = require("../middlerwares/authentication");

const UserRouter = Router();

UserRouter.get('/logout', logoutUser);

UserRouter.use(homeRedirect);

UserRouter.get('/login', login);

UserRouter.get('/signup', signup);

UserRouter.post('/signup', createUser);

UserRouter.post('/login', loginUser);

module.exports = {
    UserRouter
}