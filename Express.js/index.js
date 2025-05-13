const express = require("express");
const app = express();

let port = 5000;

app.listen (port, () => {
    console.log(`app listen is sucessfully on port ${port}`); // Server created 
});

app.use((req,res) => {
    console.log(req); // sending Request
    console.log("new Incomiing request Recived Successfully!");  // sending the response 
    res.send(" Thankyou for giving to me a opprtunity for indroduced my self") // sending the respoonse in a string
    res.send({
        name : "Prathamkumar Dubey",
        college : "GH raisoni college of engeenering and management",
        city : "Nagpure",
        contactNo : 9529754950,
        Branch : "MAC"
    });  // sending response in object formate.

    res.send("<h1>Prathamkumar Dubey<h1>") // sending response in HTML tag.
});

