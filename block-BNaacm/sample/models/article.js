 var mongoose= require('mongoose')
  var schema = mongoose.schema;

  var articleSchema = new mongoose.Schema({
    title : "string",
    description:"string"
  })
 
 module.exports = mongoose.model('Article' , articleSchema)
