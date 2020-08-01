const express = require('express')
const app = express()
const port = 3000
app.set('views', 'Views');
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.listen(port,()=>console.log(`()=>port ${port}`))
// Express
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// Body parser 
let mongoose = require('mongoose');
mongoose.connect('mongodb+srv://thanhloc:EVL6sfbDcNsuJ8fY@cluster0.cbei7.gcp.mongodb.net/tutorial?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
    if(!err){
        console.log('connect to mongodb successed')
    }else{
        console.log('connect to mongodb failed')
    }
});

const cap1s = require('./Models/cap1')
const cap2s = require('./Models/cap2');
const cap1 = require('./Models/cap1');
// Mongoose pass EVL6sfbDcNsuJ8fY
app.get("/",(req,res)=>{
    res.send('test')
})
app.get('/cap1/:name',(req,res)=>{
    var cap1  = new cap1s({
            name:req.params.name,
            kid:[]
        })
        cap1.save((err)=>{
            if(!err){
                res.send("success")
            }else{
                res.send("fail "+err)
            }
        })
})

app.get('/cap2/:idname/:name',(req,res)=>{
    var cap2  = new cap2s({
            name:req.params.name,
        })
        cap2.save((err)=>{
            if(!err){
                res.send("success")
                cap1.findOneAndUpdate({_id:req.params.idname},{$push:{kids:cap2._id}},(err)=>{
                    if(!err){
                        res.send("success")
                    }else{
                        res.send("fail "+"errMsg:"+err)
                    }
                })
            }else{
                res.send("fail errMsg:"+err)
            }
        })
})