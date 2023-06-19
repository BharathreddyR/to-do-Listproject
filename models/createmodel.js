
const mongoose =require('mongoose')
const userSchema = new mongoose.Schema({
    title: {
        type: String,
        required:false
    },
     description:{
        type:String,
        required:false
     },
    dueDate: {
        type:Date,
        required:true
    },
    completed: {
        type:String,
        required:false
      }  
})
module.exports=mongoose.model('todoList',userSchema)