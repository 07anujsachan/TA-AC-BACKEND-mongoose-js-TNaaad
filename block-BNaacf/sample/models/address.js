var mongoose = require('mongoose')
var schema = mongoose.schema;
 
 var addressSchema = new schema({
  village: string,
  city: string,
  state: string,
  pincode : Number,
  usre: schema.types.ObjectId

 })