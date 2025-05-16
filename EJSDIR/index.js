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
app.get("/rolldice", (req,res) => {
    let diceVal = Math.floor(Math.random() * 6) +1 ;
    res.render("rolldice.ejs" , { diceVal });
})

app.get("/ig/:username", (req,res) => {
    let { username } = req.params; 
    res.render("instagram.ejs" , { username });
})


app.listen(port , () => {
    console.log(`App Listem on Port.${port}`);
})
