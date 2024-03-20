const { validateToken } = require("../services/authentication");

function checkForAuthCookie(cookieName){
    return (req, res, next)=>{
        const tokenCookieVal = req.cookies[cookieName];
        //console.log(tokenCookieVal);
        if(!tokenCookieVal)
        return next();

        try {
            const userPayload = validateToken(tokenCookieVal);
            req.user = userPayload;
            //console.log(userPayload);
        } catch (error) {
        }
        return next();
    };
}

module.exports = {
    checkForAuthCookie
}