const http = require('http');
const app = require('./test');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

//server.listen(port);
//const port = process.env.PORT || 3000

app.listen(port, function(){
    console.log("we are listening at localhost:"+port);
    
})