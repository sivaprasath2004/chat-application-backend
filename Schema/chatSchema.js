const mongoose=require('mongoose')
const chats=new mongoose.Schema({
    id:String,
    chat:[String],
    userId:[String]
})
module.exports=mongoose.model('chats',chats)