const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000
app.set('views', 'Views');
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.get("/",(req,res)=>{
    res.send('test')
})
app.get("/",(req,res)=>{
    res.send('test')
})
app.get("/button",(req,res)=>{
    res.render('button')
})
app.listen(port,()=>console.log(`()=>port ${port}`))