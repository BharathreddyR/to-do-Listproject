const express = require('express');  
const router = express.Router();  
const bodyParser=require('body-parser')
const mongoose =require('mongoose')
const demo =require('../models/createmodel')
router.put('/tasks/:id',async(req,res)=>{
    try{ 
        let { title,description,dueDate, completed
    }=req.body
    let tasksId =req.params.id
    let userData={
        title,
        description,
        dueDate, 
        completed
    }
    const data =await demo.findByIdAndUpdate({_id:tasksId},userData,{new:true})
    res.send(data)
    }catch(err){
        res.send(err.message)
    
    }
    })
    
module.exports =router