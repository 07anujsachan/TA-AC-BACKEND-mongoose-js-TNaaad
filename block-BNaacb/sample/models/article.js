 var mongoose = require('mongoose')
 var schema = mongoose.schema;
  
  var articleSchema = new schema({
    title: "string",
    description: "string"
  })