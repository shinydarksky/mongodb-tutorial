const express = require('express')
const app = express()
const port = 3000
app.set('views', 'Views');
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.listen(port,()=>console.log(`()=>port ${port}`))
// Express
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://thanhloc:Lelouch@cluster0.cbei7.gcp.mongodb.net/tutorial?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
// Mongoose
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// Body parser




app.get("/",(req,res)=>{
    res.send('test')
})
app.get("/",(req,res)=>{
    res.send('test')
})
app.get("/button",(req,res)=>{
    res.render('button')
})
