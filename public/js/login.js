var http = require('http');
var express=require("express");
var app = express();
var path = require("path");
var fs = require('fs');
var querystring = require('querystring');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quicknotesUser";

var hostname = "localhost";
var port = 3000;
//"mongodb://localhost:27017/college"; here college is table name

app.use(express.static(path.join(__dirname,"public")));

//http.createServer(function(res , res){

app.get("/",function(res , res){
    console.log('request for ' + req.url + ' by method ' + req.method);
    if(req.url == "/signup.html"){
        res.writeHead(200,{"Content-Type":"text/html"});
        fs.createReadStream("./public/signup.html").pipe(res);
    }
    
    //to check if its post
    if(req.method == "POST"){
        var data = "";
        req.on("data",function(err,db){
               if(err)throw err;
                var q = querystring.parse(data);
            
            //collection means table name
                db.collection('rectrolabusers').insertOne(q, function(err,res){
                    if(err)throw err;
                    console.log("1 data Inserted success");
                    db.close();
                            
                    })
               });
        
    }
//}).listen(3000);
});
app.listen(3000, function(){
    console.log("we are listening at port 3000");
    console.log("server running at http://" + hostname+":"+ port);
    
}); 





