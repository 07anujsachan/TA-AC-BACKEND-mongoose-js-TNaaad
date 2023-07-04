var mongoose = require('mongoose')
var schema = mongoose.schema;
 
 var userSchema = new schema({
  name: string,
  email: string,
   age : { type: number , default: 0}
 })