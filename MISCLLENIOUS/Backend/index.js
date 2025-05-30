import express from "express"
const app = express();
const port = 8080;

app.use(express.urlencoded({extended : true})); // middlewqare
app.use(express.json());

app.get("/register", (req,res) => {
    let {user, password} = req.query;
    res.send(`Standard Get Response Welcome ${user} !`)
});

app.post("/register", (req,res) => {
    let {user, password} = req.body;
    res.send(`Standard Post Response Welcome ${user}!`)
}); 

app.listen(port, () => {
    console.log(`App listen on port ${port}`);
});