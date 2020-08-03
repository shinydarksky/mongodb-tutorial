var cap1s = require('../Models/cap1')
var cap2s = require('../Models/cap2')



module.exports = (req,res)=>{
    var cap1 = cap1s.aggregate(
        [{
            $lookup:
            {
                from:"cap2",
                localField:"kids",
                foreignField:"_id",
                as:"con"
            }
        }]
        ,(err,data)=>{
            if(!err){
                res.render('create',{data:data})
            }else{
                res.json("fail "+"errMsg: "+err)
            }
        })   
}