const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/angularlibraryapp');

const Schema=mongoose.Schema;

const UserSchema= new Schema({
  uname:String,
  email:String,
  password:String
});



const Userdata=mongoose.model('user',UserSchema);

module.exports=Userdata;