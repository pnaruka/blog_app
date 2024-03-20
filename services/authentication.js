const jwt = require("jsonwebtoken");

function createToken(user){
    //console.log(secret);
    const payload = {
        _id: user._id,
        email: user.email,
        role: user.role
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

