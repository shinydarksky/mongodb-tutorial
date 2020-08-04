var cap1s = require('../models/cap1')
module.exports = (req, res) => {
    var cap1 = new cap1s({
        name: req.params.name,
        kid: []
    })
    cap1.save((err) => {
        if (!err) {
            res.json("success")
        } else {
            res.json("fail " + err)
        }
    })
}
