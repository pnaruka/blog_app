const express = require("express");
const path = require('path');
const {UserRouter} = require("./routes/user.js")
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const { checkForAuthCookie, isUserSignedIn} = require("./middlerwares/authentication.js");
const { BlogRouter } = require("./routes/blog.js");

dotenv.config({path:'./.env'});
const DB_URL = `mongodb+srv://pnarukaosw:${process.env.DB_PASS}@blogbase.pt9ynya.mongodb.net/?retryWrites=true&w=majority&appName=blogBase`
const app = express();
const PORT = 8000 || process.env.PORT;

app.set("view engine", "ejs");
app.set("views",path.resolve("./views"))
app.use(express.static(path.resolve('./public')));
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(checkForAuthCookie("token"));
app.use('/user', UserRouter);
app.use(isUserSignedIn);
app.use('/blog',BlogRouter);


mongoose.connect(DB_URL).then(()=>{
    console.log('DB connected');
}).catch((err)=>{
    console.log(err);
})


app.get("/",(req, res)=>{
    return res.redirect("/user/login");
});

app.listen(PORT, ()=>{
    console.log(`Server up on port: ${PORT}`);
});