var express = require('express')

  var mongoose = require('mongoose')

  mongoose.connect("mongodb://localhost/sample",
  { useNewUrlParser: true , useUndefinedTopology: true} , (err) => {
    console.log(err ? err : "connected true ");
  }
  )

  var app = express() 
  app.get('/', (res , req) =>{
    res.send('welcome')
  })

   app.listen('3000' , () =>{
    console.log('server is listening on port 3000');
   })

   