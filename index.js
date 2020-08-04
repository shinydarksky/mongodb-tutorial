const express = require('express')
const app = express()
const port = 3000
app.set('views', 'Views');
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.listen(port, () => console.log(`()=>port ${port}`))
// Express
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// Body parser 
const controlerCap1 = require('./controller/controller.cap1')
const controlerCap2 = require('./controller/controller.cap2')
const controlerHome = require('./controller/controller.home')
const controlerCreate = require('./controller/controller.create')
const controllerCreatePost = require('./controller/controller.create.post')
//Controller 
var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost:27017/tutorial', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err) {
        console.log('connect to mongodb successed')
    } else {
        console.log('connect to mongodb failed ' + err)
    }
});
// Mongoose pass TORDzu1OSZMG5EbG
app.get("/", (req, res) => {
    res.json('test')
})
app.get('/cap1/:name', controlerCap1)
app.get('/cap2/:idname/:name', controlerCap2)
app.get('/home', controlerHome)

app.get('/create', controlerCreate)
app.post('/create', controllerCreatePost)
