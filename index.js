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
const controlerCap1 = require('./controller/controller.cap1')
const controlerCap2 = require('./controller/controller.cap2')
const controlerHome = require('./controller/controller.home')
const controlerCreate = require('./controller/controller.create')
//Controller 
var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost:27017/tutorial', {useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
    if(!err){
        console.log('connect to mongodb successed')
    }else{
        console.log('connect to mongodb failed '+err)
    }
});
var cap1s = require('./models/cap1')
var cap2s = require('./models/cap2')
// Mongoose pass TORDzu1OSZMG5EbG
app.get("/",(req,res)=>{
    res.json('test')
})
app.get('/cap1/:name',controlerCap1)
app.get('/cap2/:idname/:name',controlerCap2 )
app.get('/home',controlerHome)

app.get('/create',controlerCreate)
app.post('/create',(req,res)=>{
    if(req.body.dataCap1){
        var cap1  = new cap1s({
            name:req.body.dataCap1,
            kid:[]
        })
        cap1.save((err)=>{
            if(!err){
                res.redirect('/home')
            }else{
                res.json("fail "+err)
            }
        })
    }
    else if (req.body.dataCap2){
        var cap2  = new cap2s({
            name:req.body.dataCap2,
        })
        cap2.save((err)=>{
            if(!err){
                cap1s.findOneAndUpdate({_id:req.body.idCap1},{$push:{kids:cap2._id}},(err)=>{
                    if(!err){
                        res.redirect('./create')
                    }else{
                        res.json("fail "+"errMsg:"+err)
                    }
                })
            }else{
                res.json("fail errMsg:"+err)
            }
        })
    }
})
