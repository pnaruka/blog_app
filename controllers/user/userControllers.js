const User = require("../../models/user")

const login = (req,res)=>{
    return res.render('login');
};

const signup = (req, res)=>{
    return res.render("signup")
};

const createUser = async (req, res)=>{
const {fullName, email, password} = req.body;
await User.create({
    fullName,
    email,
    password
});
return res.redirect("/");
};

module.exports = {
    login,
    signup,
    createUser
}