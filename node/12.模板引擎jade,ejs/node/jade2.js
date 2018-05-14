const jade=require('jade');

var str=jade.renderFile('./views/7.jade', {pretty: true});

console.log(str);
