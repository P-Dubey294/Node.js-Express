import express from "express"
const app = express();
const port = 8080;

app.get("/register", (req,res) => {
    let {user, password} = req.query;
    res.send(`Standard Get Response Welcome ${user} !`)
});

app.post("/register", (req,res) => {
    res.send("Standard Post Response")
}); 

app.listen(port, () => {
    console.log(`App listen on port ${port}`);
});