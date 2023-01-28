var http = require('http');
var express=require("express");
var app = express();
var path = require("path");
var fs = require('fs');
var router = express.Router()
const { default: firebase } = require('@firebase/app-compat');

var hostname = "localhost";
var port = 3000;

// var firebaseConfig = {
//     apiKey: "AIzaSyCWqgqD3UTSwk6BWlubyl1Y2wXjC8NTBXo",
//     authDomain: "quicknotes-15bcf.firebaseapp.com",
//     projectId: "quicknotes-15bcf",
//     storageBucket: "quicknotes-15bcf.appspot.com",
//     messagingSenderId: "462392978008",
//     appId: "1:462392978008:web:62dfe9bfad88858167782d",
//     measurementId: "G-MNE8ZXSG7E"
//     };

// firebase.initializeApp(firebaseConfig);
// firebase.auth.Auth.Persistence.LOCAL;

$("#btn-login").click(function ()
{
    var email = $("#email").val();
    var password = $("#password").val();
    if(email != "" && password != "")
    {
        var result = firebase.auth().signInWithEmailAndPassword(email, password);
        
        result.catch(function(error)
        {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        onsole.log(errorMessage);
        window.alert("Message: " + errorMessage);
        });

    }
});
