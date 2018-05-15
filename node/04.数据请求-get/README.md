http
fs

数据请求——

前台->form、ajax、jsonp

后台->一样


前台 <-> 后台

都是通过http协议


请求方式：(主要)

1.GET		数据在url中

2.POST		数据不在url中


        消息

浏览器 <-----> 服务器

浏览器服务器通过消息 传递数据


消息

消息头 --header
				ulr
				头信息
消息体 --content
				post数据


```

req.url=>"/aaa?user=wind&pass=123456"
/aaa
user=wind&pass=123456
```
---

GET数据解析

1.自己切

2.querystring		xxx=xx&xxx=xxx

3.urlLib			aaa?xxx=xx&xx=12

```
urlLib.parse(url, true);	pathname
			query
```

---

POST数据
