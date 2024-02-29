const express=require('express')
const app=express()
const http=require('http')
const socketio=require('socket.io')
const server=http.createServer(app)
const io=socketio(server,{cors:{origin:'*'}})
const {addUsers,removeUser,getUser}=require('./entity')
const App=require('./app')
app.get('/',(req,res)=>res.send("worked"))
io.on("connect",socket=>{
  console.log('Connect')
  socket.on('join', ({name,room},callBack) => {
    console.log('joined')
    const {user,error}=addUsers({id:socket.id,name:name,room:room})
    App({id:socket.id,name,room})
    if(error){
      callBack(error)
      console.log(error)
      return;
    }
    socket.join(user.room);
    socket.emit('message',{user:'admin',text:`welcome ${user.name} join the room`})
    socket.broadcast.to(user.room).emit('message',{user:'admin',text:`${user.name} has join the room`})
  });
  socket.on('sendMes', (message,callBack) => {
    console.log(message)
    const user=getUser(socket.id)
    if(user){
    io.to(user.room).emit('message',{ user:user.name, text : message})
    }
    else{
      callBack("user Not found")
    }
  })
  socket.on('disconnect',()=>{
    console.log("disconnect")
    const user = removeUser(socket.id);
   console.log('users remove',user)
    if(user) {  
      io.to(user.room).emit('message',{ user: 'admin', text : `${user.name} left` })
    }
  })
})
server.listen(8000,()=>console.log("server is 8000"))