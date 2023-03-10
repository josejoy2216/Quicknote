 var admin = require('firebase-admin');
const http = require('http');
const fs = require('fs');
const path = require('path');
var firebaseConfig = {
    apiKey: "AIzaSyCWqgqD3UTSwk6BWlubyl1Y2wXjC8NTBXo",
    authDomain: "quicknotes-15bcf.firebaseapp.com",
    projectId: "quicknotes-15bcf",
    storageBucket: "quicknotes-15bcf.appspot.com",
    messagingSenderId: "462392978008",
    appId: "1:462392978008:web:62dfe9bfad88858167782d",
    measurementId: "G-MNE8ZXSG7E"
    };

const hostname = "localhost";
const port = 3000;

firebase.initializeApp(firebaseConfig);
firebase.auth.Auth.Persistence.LOCAL;

const server = http.createServer((req, res)=>{
    
    console.log('request for '+req.url+'by method '+req.method);
    
    if(req.method=="GET"){
        var fileURL;
        if(req.url=='/'){
            fileURL="/index.html"
        }else{ fileURL=req.url}
        var filePath = path.resolve('./public'+fileURL);
        const fileExt = path.extname(filePath);
        
        if(fileExt ==".html"){
            fs.exists(filePath,(exists)=>{
            if(!exists){
                res.statusCode = 404;
                res.setHeader('Content-Type','text/html');
                res.end('<html><body><h1> error 404:'+fileURL+'doest not exist</h1></body></html>')
                }
                
                res.statusCode = 200;
                res.setHeader('Content-Type','text/html');
                fs.createReadStream(filePath).pipe(res);
            })
        }else{
            res.statusCode = 404;
                res.setHeader('Content-Type','text/html');
                res.end('<html><body><h1> error 404:'+fileURL+'not a html file</h1></body></html>')
        }
           
    }else{
        res.statusCode = 404;
        res.setHeader('Content-Type','text/html');
        res.end('<html><body><h1> error 404:'+fileURL+'not supported</h1></body></html>')
    }
});
server.listen(por,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}`);
});











