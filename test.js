const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");

//const mongoose = require("mongoose"); used for mongoose needed

//const productRoutes = require("./api/routes/products");
//const orderRoutes = require("./api/routes/orders");
//const userRoutes = require('./api/routers/user'); needed

// mongoose.connect('mongodb+srv://node-shop:'+ process.env.MONGO_ATLAS_PW +'@node-rest-shop-5cbp6.mongodb.net/test?retryWrites=true&w=majority',{
//     useNewUrlParser: true,    //add it
//     //useMongoClient: true //old
//     useUnifiedTopology: true
// }); needed

//mongoose.Promise = global.Promise;

app.use(morgan("dev"));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"public")));

app.get("/",function(req, res){
    console.log('request for ' + req.url + ' by method ' + req.method);
    res.status(200)
    res.sendFile(path,join(__dirname,"public","index.html"));
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");//insted of * your domain name will come
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});


// Routes which should handle requests
// app.use("/user", userRoutes); needed
 app.post("/login.html",function(req, res){
//    console.log('request for ' + req.url + ' by method ' + req.method);
//    res.status(200)
//    res.sendFile(path,join(__dirname,"public","index.html"));
    var nameu = req.body.name;
    console.log('name '+ nameu);
    res.sendFile(__dirname,"public","login.html")
    res.status(200);
});

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;