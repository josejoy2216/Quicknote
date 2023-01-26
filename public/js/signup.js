var admin = require('firebase-admin');
var express = require('express');
var path = require('path');
var firebaseConfig = {
    apiKey: "AIzaSyCKiQGsmAbKlmtWafmXlQiAnMnb4mDpqkw",
    authDomain: "rectolabs9.firebaseapp.com",
    databaseURL: "https://rectolabs9.firebaseio.com",
    projectId: "rectolabs9",
    storageBucket: "rectolabs9.appspot.com",
    messagingSenderId: "743317091327",
    appId: "1:743317091327:web:7e47d8d66f03995bc7adca",
    measurementId: "G-L1PRCWL8X2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth.AUTH.Persistence.LOCAL;

app.use(express.static(path.join(__dirname, 'public/js/signup.js')));

//<link rel='stylesheet' href='/style.css' />

$("#signin").click(function(){
  var email= $("#your_email").val();
  var password= $("#your_pass").val();
  if (email != "" && password!="") {
    var result= firebase.auth().signInWithEmailAndPassword(email,password);
    result.catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("errorCode");
      console.log("errorMessage");
      window.alert("message:"+ errorMessage);

    });
  }
  else
  {
    window.alert("Form is incomplete please fill out the fields");
  }

});
