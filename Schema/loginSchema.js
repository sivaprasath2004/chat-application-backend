const mongoose=require('mongoose')
const account=new mongoose.Schema({
    FullName:String,
    Email:String,
    Ph_Num:Number,
    UserName:String,
    Password:String,
    Users:[String]
})
module.exports=mongoose.model('account',account)