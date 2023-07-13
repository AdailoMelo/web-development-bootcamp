const express = require("express");
const app = express();
const https = require("https");

app.get("/", function(req, res){
    const URL = "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=b87d4e9eac6a3bb3eaa497d1c6061492";

    https.get(URL, function(response){
        response.on("data", function(data){
            const wheatherdata = JSON.parse(data);
            res.send("I won't subscribe to use this API, but i can put the measage of JSON.parse in screen using send(), here: " + wheatherdata.message + "Code: "+ wheatherdata.cod);
            console.log(wheatherdata)
        })
    });
})

app.listen(3000, function(){
    console.log("Open in port: 3000");
});