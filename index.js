const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000
const mongoDB = 'mongodb://127.0.0.1:3030/todo-list'
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.get("/",(req,res)=>{
    res.send('test')
})

app.listen(port,()=>console.log(`()=>port ${port}`))