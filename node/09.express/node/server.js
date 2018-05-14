const express=require('express');

var server=express();


server.get('/', function (){
  console.log('有GET');
});
server.post('/', function (){
  console.log('有POST');
});


//
// server.use('/a.html', (req, res)=>{
//   // res.write({a:12, b:5}); //报错 TypeError [ERR_INVALID_ARG_TYPE]: The first argument must be one of type string or Buffer. Received type object
//   //只能接收字符串或是buffer
//   // res.send({a:12, b:5});
//   res.end();
// });
//
// server.use('/b.html', (req, res)=>{
//   res.write('123');
//   res.end();
// });


server.use('/', ()=>{
  console.log('use了');
});

server.listen(8080);
