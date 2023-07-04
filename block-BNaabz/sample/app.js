var express = require('express');
 
var mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost/sample' ,(error) =>{
    console.log(error ? error : ' connected true ');
 })

 var app = express();

  app.get('/', (res , req) =>{
    res.send('Welcome')
  })

 app.listen(3000 , ()=> {
    console.log('server listening on port 3000' );
 })