const express = require('express');  
const router = express.Router(); 
const mongoose =require('mongoose')
const demo =require('../models/createmodel')
router.get('/tasks/:id',async(req,res)=>{
    try{
    let tasksId =req.params.id
    const data =await demo.findById(tasksId)
    res.send(data)
    }catch(err){
        res.send(err.message)

    }

    })
module.exports =router


