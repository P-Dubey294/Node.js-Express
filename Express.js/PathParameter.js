import express from 'express';
const app = express();
let port = 5000;
app.listen(port, () => {
    console.log(`app listen is sucessfully on port ${port}`); // Server created 
})

// varibles use as a path parameter 

app.get("/:username" , 
    (req ,res) => {
    let {username , id , Branch} = req.params; 
    res.send(`Welcome to the page of @ ${username}.`);
});
