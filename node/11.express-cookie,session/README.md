express：

1.数据

2.中间件

---

http-无状态的

cookie、session

cookie：在浏览器保存一些数据，每次请求都会带过来

  \*不安全、有限(4K)

session：保存数据，保存在服务端

  \*安全、无限

---

session：基于cookie实现的

  \*cookie中会有一个session的ID，服务器利用sessionid找到session文件、读取、写入

  隐患：session劫持

---

cookie

1.读取——cookie-parser

2.发送——

session

cookie-session

cookie 访问

/        可以

  /aaa   可以访问

    /ccc 有cookie

    /bbb 不可以
---

cookie：

1.cookie空间非常小——省着用

2.安全性非常差

1.精打细算

2.校验cookie是否被篡改过

a.发送cookie

res.secret='字符串';

res.cookie(名字, 值, {path: '/', maxAge: 毫秒, signed: true});

b.读取cookie

cookie-parser

```
server.use(cookieParser('秘钥'));
server.use(function (){
	req.cookies		未签名版
	req.signedCookies	签名版
});
```
c.删除cookie

res.clearCookie(名字);

---

cookie-parser

cookie-encrypter

---

session：

cookie-session

1.写入
2.读取

session劫持

---

cookie-session
```
server.use(cookieParser());
server.use(cookieSession({
	keys: [.., .., .., ..]
}));

server.use('/', function (){
	req.session
});

delete req.session
```
---
1.cookie-存在浏览器，4K，不安全

  签名、加密

2.session-存在服务器

  不能独立存在，基于cookie

---
```
server.use(cookieParser('签名字符串'));
server.use(cookieSession({

}));

server.use(function (req, res){
	res.cookie(名字, 值, {signed: true});

	res.cookies['user']
	res.clearCookie('名字');

	res.session['xxx']
	delete res.session['xxx'];
});
```
---