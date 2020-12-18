var express = require('express');
var bodyParser = require("body-parser");
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', (req, res, next) => {
  var user=req.body.user; 
  var password=req.body.password;
  console.log('###', req)
  res.send({ message: '登录成功了，你的二货', user: user, password: password, token:'token' })
})

module.exports = router;
