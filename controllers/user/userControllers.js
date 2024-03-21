const { User } = require("../../models/user")

const login = (req, res) => {
    if (req.user)
        return res.redirect("/blog/home");
    return res.render('login');
};

const signup = (req, res) => {
    return res.render("signup")
};

const createUser = async (req, res) => {
    const { fullName, email, password } = req.body;
    await User.create({
        fullName,
        email,
        password
    });
    return res.redirect("/");
};

const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body;
        //console.log("here");
        const token = await User.checkUser(email, password);
        //console.log(token);
        return res.cookie("token", token).redirect("/blog/home");
    } catch (error) {
        return res.render("login", {
            error: error.message
        });
    }
}

const logoutUser = async (req, res) => {
    res.clearCookie("token").redirect("/");
}

module.exports = {
    login,
    signup,
    createUser,
    loginUser,
    logoutUser
}