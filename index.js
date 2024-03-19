const express = require("express");
const path = require('path');
const {UserRouter} = require("./routes/user.js")

const app = express();
const PORT = 8000 || process.env.PORT;

app.set("view engine", "ejs");
app.set("views",path.resolve("./views"))

app.get("/",(req, res)=>{
    res.render("home");
})
app.use('/user', UserRouter);
app.listen(PORT, ()=>{
    console.log(`Server up on port: ${PORT}`);
});