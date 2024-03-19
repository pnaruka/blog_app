const express = require("express");
const path = require('path');

const app = express();
const PORT = 8000 || process.env.PORT;

app.set("view engine", "ejs");
app.set("views",path.resolve("./views"))

app.get("/",(req, res)=>{
    res.render("home");
})

app.listen(PORT, ()=>{
    console.log(`Server up on port: ${PORT}`);
});