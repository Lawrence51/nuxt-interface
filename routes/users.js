var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', (req, res, next) => {
  var user = req.body.user;
  var password = req.body.password;
  console.log('###', req)
  res.cookie("user", { msg: '登录成功了，你的二货', user: user, password: password, token: 'token' }, { maxAge: 900000, httpOnly: true });
  res.send({ msg: '登录成功了，你的二货', user: user, password: password, token: 'token',err:'0' })
})

module.exports = router;
