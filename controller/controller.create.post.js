var cap1s = require('../models/cap1')
var cap2s = require('../models/cap2')
module.exports = (req, res) => {
    if (req.body.dataCap1) {
        var cap1 = new cap1s({
            name: req.body.dataCap1,
            kid: []
        })
        cap1.save((err) => {
            if (!err) {
                res.redirect('/home')
            } else {
                res.json("fail " + err)
            }
        })
    }
    else if (req.body.dataCap2) {
        var cap2 = new cap2s({
            name: req.body.dataCap2,
        })
        cap2.save((err) => {
            if (!err) {
                cap1s.findOneAndUpdate({ _id: req.body.idCap1 }, { $push: { kids: cap2._id } }, (err) => {
                    if (!err) {
                        res.redirect('./create')
                    } else {
                        res.json("fail " + "errMsg:" + err)
                    }
                })
            } else {
                res.json("fail errMsg:" + err)
            }
        })
    }
}