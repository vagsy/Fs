//require   请求：引入模块的
//module    模块：？
//exports   输出：？

/*
exports.a=12;
exports.b=5;
exports.c=99;
*/
//模块中偷偷地加个东西
// (function (require, exports, module){
//   var a=12;
//   var b=5;
//   exports.a=12;
// })();
console.log(module.exports==exports);//true 这两个相等

module.exports={a: 12, b: 5, c: 99};
