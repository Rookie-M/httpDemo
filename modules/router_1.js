const http = require("http");
const url = require("url");

//操作路由的模块 router 引入
var router = require("./router.js");



//1、创建http服务器
http.createServer(function(req, res){
	res.writeHead(200, {"Content-type": "text/html; charset=utf-8"});//响请求的客户端发送响应头

	if(req.url !== "/favicon.ico"){

		var pathName = url.parse(req.url).pathname.replace(/\//, "");
		console.log(pathName);

		/*
			捕获异常
		*/
		try{
			//调用模块对应函数。
			router[pathName](req, res);
		}catch(error){

			//如果输入不存在的路由，返回首页
			router["home"](req, res);
		}

	}
	res.end();
}).listen(8000);

console.log("Server running at http://localhost:8000");














