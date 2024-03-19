const {Router} = require("express");
const {login, signup, createUser} = require("../controllers/user/userControllers")

const router = Router();

router.get('/login', login);

router.get('signup', signup);

router.post('/signup', createUser);

module.exports = {
    router
}