var express=require('express');
var app=express();

app.get("/",(req,res)=>{

    res.send(
        "<h1>Welcome to shop</h1>"
        +"<hr/>"
        +"<h3>Welcome to shop</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>Laptops</li>"
        +"<li>Phones</li>"
        +"</ol>"
    );
});

app.get("/aboutus",(req,res)=>{

    res.send(
        "<h1>Welcome to shop</h1>"
        +"<hr/>"
        +"<h3>in about us</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>call</li>"
        +"<li>Email</li>"
        +"</ol>"
    );
});


var server=app.listen(9000);
console.log("online shop running on port 9000");