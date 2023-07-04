var mongoose = require('mongoose')
var schema = mongoose.schema;
 
 var userSchema = new schema({
  name: string,
  email: string,
   age : { type: number , default: 0},
   favourites: [string],
   marks:[number],
   password: {type: string , minlength:5 , maxlength: 15},
   createdAt : { type: date , default: new date()}
 })
  
   var User = mongoose.model('User' , userSchema)
    module.exports = User;
   
   