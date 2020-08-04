var cap1s = require('../models/cap1')
var cap2s = require('../models/cap2');
module.exports = (req, res) => {
    var cap1 = cap1s.aggregate(
        [{
            $lookup:
            {
                from: "cap2",
                localField: "kids",
                foreignField: "_id",
                as: "con"
            }
        }]
        , (err, data) => {
            if (!err) {
                res.render('home', { data: data })
            } else {
                res.json("fail " + "errMsg: " + err)
            }
        })
}