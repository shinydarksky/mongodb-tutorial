const express = require('express')
const app = express()
const port = 3000
app.set('views', 'Views');
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.listen(port,()=>console.log(`()=>port ${port}`))
// Express
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://thanhloc:CECwH6ipKW1jj8HC@cluster0.cbei7.gcp.mongodb.net/tutorial?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
    if(!err){
        console.log('connect to mongodb successed')
    }else{
        console.log('connect to mongodb failed')
    }
});
// Mongoose
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// Body parser




app.get("/",(req,res)=>{
    res.send('test')
})
