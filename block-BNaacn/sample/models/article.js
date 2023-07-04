var mongoose = require('mongoose');

 var Schema = mongoose.schema;

  var articleSchema = new Schema({
  title: String,
  description: String,
  tags:[string],
  createdAt:{ type: date , default: new date()},
  likes:{type: number, default: 0}
  })