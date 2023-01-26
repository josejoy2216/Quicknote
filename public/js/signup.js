var admin = require('firebase-admin');
var express = require('express');
var path = require('path');
var firebaseConfig = {
  apiKey: "AIzaSyCWqgqD3UTSwk6BWlubyl1Y2wXjC8NTBXo",
  authDomain: "quicknotes-15bcf.firebaseapp.com",
  projectId: "quicknotes-15bcf",
  storageBucket: "quicknotes-15bcf.appspot.com",
  messagingSenderId: "462392978008",
  appId: "1:462392978008:web:62dfe9bfad88858167782d",
  measurementId: "G-MNE8ZXSG7E"
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
