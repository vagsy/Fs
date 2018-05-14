const http=require('http');

var server=http.createServer(function (request, response){//回调函数
  console.log('有人来了');
});

//监听——等着
//端口-数字
server.listen(8080); //端口共存->端口转发
