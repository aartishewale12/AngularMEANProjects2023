

const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//Define collection and Schema
let Student=new Schema({
id:{type:String},
firstname:{type:String},
lastname:{type:String},
email:{type:String},
gender:{type:String},
mobno:{type:Number},
address:{type:String}},
{ collection:'studentdata'})
module.exports=mongoose.model('Student',Student)



