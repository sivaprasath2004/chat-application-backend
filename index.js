const express=require('express')
const app=express()
const http=require('http')
const socketio=require('socket.io')
const server=http.createServer(app)
const io=socketio(server,{cors:{origin:'*'}})
app.get('/',(req,res)=>res.send("worked"))
io.on("connect",socket=>{
  console.log('Connect')
  socket.on('message', ({name,room},callBack) => {
    console.log('Message received:', name,room);
  });
  socket.on('disconnect',()=>{
    console.log("disconnect")
  })
})
server.listen(8000,()=>console.log("server is 8000"))