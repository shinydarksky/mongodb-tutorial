const mongoose = require('mongoose')


const schemaCap3 = new mongoose.Schema({
        name:String,
        kids:[{type:mongoose.Schema.Types.ObjectId}]
})
module.exports = mongoose.model('cap3',schemaCap3)