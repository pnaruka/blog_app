const jwt = require("jsonwebtoken");

function createToken(user){
    //console.log(secret);
    const payload = {
        _id: user._id,
        fullName:user.fullName,
        email: user.email,
        role: user.role,
        image:user.profileImg
    };
    const token = jwt.sign(payload, process.env.SECRET_KEY);
    return token;
}

function validateToken(token){
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    return payload;
}

module.exports = {
    createToken,
    validateToken
}

