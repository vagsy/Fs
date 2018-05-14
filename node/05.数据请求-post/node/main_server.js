const http=require('http');
const fs=require('fs');
const querystring=require('querystring');
const urlLib=require('url');

var server=http.createServer((req, res)=>{
  //GET
  var obj=urlLib.parse(req.url, true);

  var url=obj.pathname;
  const GET=obj.query;

  //POST
  var str='';
  req.on('data', (data)=>{
    str+=data;
  });
  req.on('end', ()=>{
    const POST=querystring.parse(str);
    console.log(POST);
    /*
    url——要什么
    GET——get数据
    POST——post数据
    */

    //文件请求.
    var file_name='./www'+url;
    console.log(file_name)
    fs.readFile(file_name, (err, data)=>{
      if(err){
        res.write('404');
      }else{
        res.write(data);
      }
      res.end();
    });
  });
});

server.listen(8080);

// http://localhost:8080/1.html
