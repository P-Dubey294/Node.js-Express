const express = require("express");
const app = express();

let port = 5000;

app.listen (port, () => {
    console.log(`app listen is sucessfully on port ${port}`); // Server created 
});
// sending resoonse in get method
app.get("/Search", (req,res) => {
    res.send("The Serch Path is connected")
});
app.get("/Home" , (req,res) => {
    res.send("The home Path is coneected")
});

//coutom response send 
app.get("/", (req,res) => {
    res.send(" The file Path Does not exists")
})
