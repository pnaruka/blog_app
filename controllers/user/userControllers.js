const {User} = require("../../models/user")

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

const loginUser = async (req, res)=>{
    const {email, password} = req.body;
    const user = await User.checkUser(email, password);

    //console.log(user);
    return res.redirect("/");
}
module.exports = {
    login,
    signup,
    createUser,
    loginUser
}