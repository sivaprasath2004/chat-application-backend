let users=[];
let count=1
const addUsers=({id,name,room})=>{
    console.log('userAdded')
    console.log(id,name,room)
    if(!name || !room){
        console.log('first')
        return {error:"Name and room is required"}
    }
    name=name.trim().toLowerCase();
    room=room.trim().toLowerCase();
    if(users.length){
        console.log('second')
        const existingUsers=users.find(each=>each.name===name && each.room===room)
        if(existingUsers){
            return {error:'user already exist'}
        }
  
    }
    const user={id,name,room}
    console.log('last')
    users.push(user)
    return {user}
}
const getUser = (id) => {
        return users.find(item=>item.id===id)

}
const removeUser = (id) => {
    const findIdx = users.findIndex(e => e.id == id);

    if (findIdx >= 0) {
        console.log('removed',users[findIdx])
        let user=users.splice(findIdx, 1)[0]
        return user

    }
}
module.exports={
    addUsers,removeUser,getUser
}