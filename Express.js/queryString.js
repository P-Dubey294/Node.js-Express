import express from "express";

const app = express();
let port = 2000;

app.listen(port , () => {
    console.log(`App listen on port ${port}`);
})

// String Query 

app.post("/Contact" , (req,res) => {
    let { q } = req.query 
    // res.send(`Serach Result For Query ${q}`); 
    res.send(`<h1> Search Result For Query ${q}.</h1>`) // html way to send response.
});