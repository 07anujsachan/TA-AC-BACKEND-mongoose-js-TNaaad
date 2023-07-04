var mongoose = require('mongoose');

 var Schema = mongoose.schema;

  var usreSchema = new Schema({
name:String,
email:{type:String, lowercase:true},
age: {type:number , default:0},
password:{type:string , minlength:5 },
creatAt:{type:date , default: new date()}
  })