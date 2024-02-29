const mongoose=require('mongoose')
const account=require('./Schema/loginSchema')
require('dotenv').config()
const chat=require('./Schema/chatSchema')
const app=async({id,name,room})=>{
 let a=await mongoose.connect(process.env.DATA_BASE)
 if(a){
    let res=await account.findOne({UserName:name})
    if(res){
   if(res.Password===room){
   //   let chats=await chat.create({})
   }
    }
 }
 else{
    console.log('not connected')
 }
}
module.exports=app
