var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/goods-list', (req, res, next) => {
    let time = new Date().getTime() + '';
    res.send([{ time: time, name: '电视', count: 2, price: '11' }])
})

module.exports = router;