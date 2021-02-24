var express = require('express');
var expressWs = require('express-ws'); // websocket

var router = express.Router();
expressWs(router);
console.log(222, router)
router.ws('/userinfo', function (ws, req) {
  ws.on('message', function (msg) {
    ws.send("这是第二次发送信息");
    let flag = 0;
    let count = 0;
    if (flag === 0) {
      let intervalTimer = setInterval(() => {
        let str = JSON.stringify({title: "这是定时器发送的信息", count: count})
        ws.send(str);
        if (count > 100) {
          clearInterval(intervalTimer)
        };
        count++;
      }, 2000);
    }
    flag++;
  })
  ws.on('close', function(msg, event){
    console.log( '====',msg, event)
  })
  ws.send("你连接成功了");
  
})

module.exports = router;