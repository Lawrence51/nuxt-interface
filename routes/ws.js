var express = require('express');
var expressWs = require('express-ws'); // websocket

var router = express.Router();
expressWs(router);
console.log(222, router)
router.ws('/userinfo',function(ws, req){
    ws.send("你连接成功了");
    ws.on('message', function (msg) {
        // 业务代码
        console.log('链接上了', msg)
        ws.send("这是第二次发送信息");
    })
})

module.exports = router;