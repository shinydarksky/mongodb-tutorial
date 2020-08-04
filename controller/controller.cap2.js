var cap1s = require('../models/cap1')
var cap2s = require('../models/cap2');
module.exports = (req,res)=>{
    var cap2  = new cap2s({
            name:req.params.name,
        })
        cap2.save((err)=>{
            if(!err){
                cap1s.findOneAndUpdate({_id:req.params.idname},{$push:{kids:cap2._id}},(err)=>{
                    if(!err){
                        res.json("success")
                    }else{
                        res.json("fail "+"errMsg:"+err)
                    }
                })
            }else{
                res.json("fail errMsg:"+err)
            }
        })
}