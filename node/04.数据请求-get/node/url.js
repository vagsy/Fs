const urlLib=require('url');

var obj=urlLib.parse("http://www.windlineinfo.com/index?a=12&b=5", true);

console.log(obj);
console.log(obj.pathname, obj.query);
