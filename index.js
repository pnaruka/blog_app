const express = require("express");
const path = require('path');
const {UserRouter} = require("./routes/user.js")
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({path:'./.env'});
const DB_URL = `mongodb+srv://pnarukaosw:${process.env.DB_PASS}@blogbase.pt9ynya.mongodb.net/?retryWrites=true&w=majority&appName=blogBase`
const app = express();
const PORT = 8000 || process.env.PORT;

mongoose.connect(DB_URL).then(()=>{
    console.log('DB connected');
}).catch((err)=>{
    console.log(err);
})

app.set("view engine", "ejs");
app.set("views",path.resolve("./views"))

app.get("/",(req, res)=>{
    res.render("home");
});
app.use(express.urlencoded({extended:false}));
app.use('/user', UserRouter);
app.listen(PORT, ()=>{
    console.log(`Server up on port: ${PORT}`);
});