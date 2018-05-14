const http=require('http');
const querystring=require('querystring');

http.createServer((req, res)=>{
  //POST——req

  var str='';   //接收数据 X这种接收方式遇到文件图片视频会有问题

  //data——有一段数据到达(很多次)
  var i=0;
  req.on('data', (data)=>{
    console.log(`第${i++}次收到数据`);
    str+=data;
  });
  //end——数据全部到达(一次)
  req.on('end', ()=>{
    var POST=querystring.parse(str);
    console.log(POST);
  });
}).listen(8080);
