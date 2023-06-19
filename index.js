const express =require('express');
const mongoose =require('mongoose')
const app =express()
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port =4000
mongoose.connect('mongodb://127.0.0.1:27017/demo',
    
).then(()=>console.log('connected mongodb')).catch((err)=>console.log(err.message))

const mainRoute =require('./router')
app.use('/first',mainRoute)


app.listen(port,()=>{
    console.log(`app is listening server:${port}`)
})