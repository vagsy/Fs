## es6新特性 ###

### 01. 命名 ###

ES6

ECMAScript≈JS

ECMA

ES

ECMA6.0

ES6.0

### 02. es6兼容性 ###

http://kangax.github.io/compat-table/es5/

http://kangax.github.io/compat-table/es6/

ES6(ES2015)——IE10+、Chrome、FireFox、移动端、NodeJS

### 1. 两种处理兼容的方式 ###

编译、转换

1.在线转换browser.js

2.提前编译babel

babel==browser.js

### 03. es6新特性 ###
1.变量

2.函数

3.数组

4.字符串

5.面向对象

6.Promise

7.generator

8.模块化

### 04. es6变量 ###

let const

//let 定义时变量不能重复 否则报错

//const 定义常量

var、let、const 区别？ https://www.jianshu.com/p/4e9cd99ecbf5

### 05. es6 函数 ###

函数——箭头函数

es5函数定义

function 名字(){

}

es6函数定义


()=>{

}

1.如果只有一个参数，()可以省

2.如果只有一个return，{}可以省

()——只有一个参数

{}——只有一个return

```
let show = function (a) {
  return a*2;
}
let show=a=>a*2;
```
```
let arr=[12, 5, 8, 99, 33, 14, 26];
/*arr.sort(function (n1, n2){
  return n1-n2;
});*/

arr.sort((n1, n2)=>{
  return n1-n2;
});
再精简
arr.sort((n1, n2)=>n1-n2);
alert(arr);
```

函数的参数

1.参数扩展/数组展开

2.默认参数

参数扩展：

1.收集参数

  function show(a, b, ...args){}

  \*Rest Parameter必须是最后一个

2.展开数组

  arr = [1,2,3]

  ...arr    =>    1,2,3

  \*展开后的效果，跟直接把数组的内容写在这儿一样

默认参数

```
function show(a, b=5, c=12){
  console.log(a, b, c);
}

show(99, 19, 88);
```
### 06. 解构赋值： ###

1.左右两边结构必须一样

2.右边必须是个东西

3.声明和赋值不能分开(必须在一句话里完成)
```
let [a,b,c]=[12,5,8];
let {a,b,c}={a: 12, b: 5, c: 8};

let [json, arr, num, str]=[{a: 12, b: 5}, [12,5,8], 8, 'cxzcv’];
console.log(json,arr,num,str); //{a: 12, b: 5}  [12, 5, 8] 8 "cxzcv"
```
### 07. es6数组新特性 ###

map         映射          一个对一个

```
let arr=[12,5,8];
let result=arr.map(item=>item*2);
alert(result);
```

reduce      汇总          一堆出来一个

求和

```
let arr=[12,69,180,8763];

let result=arr.reduce(function (tmp, item, index){
  //alert(tmp+','+item+','+index);
  return tmp+item;
});

alert(result);
```

求平均

```
let arr=[12,69,180,8763];

let result=arr.reduce(function (tmp, item, index){
  if(index!=arr.length-1){ //不是最后一次
    return tmp+item;
  }else{                    //最后一次
    return (tmp+item)/arr.length;
  }
});

alert(result);
```

filter      过滤器

```
let arr=[12,5,8,99,27,36,75,11];

let result=arr.filter(item=>item%3==0);

alert(result);

let arr=[
  {title: '男士衬衫', price: 75},
  {title: '女士包', price: 57842},
  {title: '男士包', price: 65},
  {title: '女士鞋', price: 27531}
];

let result=arr.filter(json=>json.price>=10000);

console.log(result);
```

forEach     循环(迭代)

```
let arr=[12,5,8,9];

arr.forEach((item,index)=>{
  alert(index+': '+item);
});
```
### 08. es6 ###

字符串

1.多了两个新方法

  startsWith

  endsWith
```
let str='git://www.baidu.com/2123123';

if(str.startsWith('http://')){
  alert('普通网址');
}else if(str.startsWith('https://')){
  alert('加密网址');
}else if(str.startsWith('git://')){
  alert('git地址');
}else if(str.startsWith('svn://')){
  alert('svn地址');
}else{
  alert('其他');
}
```

```
let str='1.png';

if(str.endsWith('.txt')){
  alert('文本文件');
}else if(str.endsWith('.jpg')){
  alert('JPG图片');
}else{
  alert('其他');
}
```

2.字符串模板

  字符串连接

  i.直接把东西塞到字符串里面      ${东西}

  ii.可以折行

```
let title='标题';
let content='内容';
let str='<div>\
  <h1>'+title+'</h1>\
  <p>'+content+'</p>\
</div>';

let str2=`<div>
  <h1>${title}</h1>
  <p>${content}</p>
</div>`;
```


### 09. es6 面向对象 ###

1.class关键字、构造器和类分开了

2.class里面直接加方法

es5中面向对象

```
function User(name, pass){
  this.name=name;
  this.pass=pass;
}

User.prototype.showName=function (){
  alert(this.name);
};
User.prototype.showPass=function (){
  alert(this.pass);
};

var u1=new User('blue', '123456');

u1.showName();
u1.showPass();
```

es6实现面向对象

```
class User{
  constructor(name, pass){
    this.name=name;
    this.pass=pass;
  }

  showName(){
    alert(this.name);
  }
  showPass(){
    alert(this.pass);
  }
}
```

继承：

es5中实现继承

```
function User(name, pass){
  this.name=name;
  this.pass=pass;
}

User.prototype.showName=function (){
  alert(this.name);
};
User.prototype.showPass=function (){
  alert(this.pass);
};

//-------------

function VipUser(name, pass, level){
  User.call(this, name, pass);

  this.level=level;
}

VipUser.prototype=new User();
VipUser.prototype.constructor=VipUser;

VipUser.prototype.showLevel=function (){
  alert(this.level);
};

var v1=new VipUser('wind', '123456', 3);

v1.showName();
v1.showPass();
v1.showLevel();
```

es6实现继承

```
super
超类==父类
class User{
  constructor(name, pass){
    this.name=name;
    this.pass=pass;
  }

  showName(){
    alert(this.name);
  }
  showPass(){
    alert(this.pass);
  }
}

class VipUser extends User{
  constructor(name, pass, level){
    super(name, pass);

    this.level=level;
  }

  showLevel(){
    alert(this.level);
  }
}

var v1=new VipUser('wind', '123456', 3);

v1.showName();
v1.showPass();
v1.showLevel();
```


### 10. json ###

json：

1.JSON对象

  JSON.stringify

  JSON.parse

2.简写

  名字跟值(key和value)一样的      留一个就行

  方法                           : function一块删

    show: function (){...}

    show(){…}

```
let a=12;
let b=5;

let json={a, b, c: 55};

console.log(json);

let json={
  a: 12,
  show(){
    alert(this.a);
  }
};

json.show();
```

json的标准写法：

1.只能用双引号

2.所有的名字都必须用引号包起来

{a: 12, b: 5}       ×

{"a": 12, "b": 5}   √

{a: 'abc', b: 5}    ×

{"a": "abc", "b": 5}√

### 11. Promise——承诺 ###


异步：操作之间没啥关系，同时进行多个操作

同步：同时只能做一件事

异步：代码更复杂

同步：代码简单

异步：

```
ajax('/banners', function (banner_data){
  ajax('/hotItems', function (hotitem_data){
    ajax('/slides', function (slide_data){
      ajax('/slides', function (slide_data){

      }, function (){
        alert('读取失败');
      });
    }, function (){
      alert('读取失败');
    });
  }, function (){
    alert('读取失败');
  });
}, function (){
  alert('读取失败');
});
```

有了Promise之后的异步：

```
Promise.all([$.ajax(), $.ajax()]).then(results=>{
  //对了
}, err=>{
  //错了
});
```

同步：

```
let banner_data=ajax_async('/banners');
let hotitem_data=ajax_async('/hotItems');
let slide_data=ajax_async('/slides');
let banner_data=ajax_async('/banners');
```

Promise——消除异步操作

  \*用同步一样的方式，来书写异步代码

Promise到底怎么用

------------------------------------------------------------------------------

Promise.all

Promise.race    竞速

```
Promise.race([
  $.ajax({url: 'http://a2.taobao.com/data/users'}),
  $.ajax({url: 'http://a15.taobao.com/data/users'}),
  $.ajax({url: 'http://a3.taobao.com/data/users'}),
  $.ajax({url: 'http://a7.taobao.com/data/users'})
]);
```
------------------------------------------------------------------------------

### 12. generator函数 ###

generator-生成器

普通函数——一路到底

generator函数——中间能停

```
function 函数(){
  代码...

  ajax(xxx, function (){
    代码...
  });
}
```

```
function *函数(){ //不能用箭头函数
  代码...

  yield ajax(xxx);

  代码...
}
```
------------------------------------------------------------------------------

yield

```
function *show(){
  alert('a');

  yield;

  alert('b');
}

function show_1(){
  alert('a');
}
function show_2(){
  alert('b');
}

let genObj=show();

genObj.next();    //show_1
genObj.next();    //show_2
```

yield是什么

```
function *炒菜(菜市场买回来的){
  洗菜->洗好的菜

  let 干净的菜=yield 洗好的菜;

  干净的菜->切->丝

  let 切好的菜=yield 丝;

  切好的菜->炒->熟的菜

  return 熟的菜;
}
```

yield传参

```
function *show(num1, num2){
  alert(`${num1}, ${num2}`);
  alert('a');

  let a=yield;

  alert('b');
  alert(a);

  return;
}

let gen=show(99, 88);

gen.next(12);   //没法给yield传参
gen.next(5);
```

yield返回

```
function *show(){
  alert('a');

  yield 12;

  alert('b');

  return 55;
}

let gen=show();

let res1=gen.next();
console.log(res1);      //{value: 12, done: false}

let res2=gen.next();
console.log(res2);      //{value: 55, done: true}
```
### async && await ###
```
let readData=async ()=>{
  let data1=await $.ajax({url: 'data/1.txt', dataType: 'json'});
  let data2=await $.ajax({url: 'data/2.txt', dataType: 'json'});
  let data3=await $.ajax({url: 'data/3.txt', dataType: 'json'});

  console.log(data1, data2, data3);
}

readData();
```
