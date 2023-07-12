const express = require("express");
const app = express();

app.get("/", function(request, response){
    response.send('<h1>Hello</h1>');
});

app.get("/contact", function(request, response){
    response.send("Contact me at: adailomelo263@gmail.com");
});

app.get("/about", function(request, response){
    response.send(
    `
        <h1>Adailo Melo</h1> 
        <p>Hi, I'm Adailo, now i'm learning backend web development with node.js and express.js, i wanna be a web fullstack developer and i'm doing all i can to learn it</p>
    
    `
    )
});

app.listen(3000, function(){
    console.log("Server start, port: 3000");
});