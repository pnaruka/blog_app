const { User } = require("../../models/user")

const login = (req, res) => {
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
        return res.cookie("token", token).redirect("/");
    } catch (error) {
        return res.render("login", {
            error:error.message
        });
    }
}

module.exports = {
    login,
    signup,
    createUser,
    loginUser
}