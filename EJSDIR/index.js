const express = require("express");
const app = express();
const path = require("path")
let port = 8080;

// EJS
app.set("/view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/home", (req,res) => {
    res.render("home.ejs");
})
app.get("/hello", (req,res) => {
    res.render("hello");
})


app.listen(port , () => {
    console.log(`App Listem on Port.${port}`);
})
