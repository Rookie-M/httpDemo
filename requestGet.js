const https = require("https");

var options = {
	hostname: "api.douban.com",
	//https的端口号是443
	port: 443,
	method: "GET",
	path: "/v2/movie/top250"
};

var responseData = "";

var request = https.request(options, (response) => {
	console.log(response);
	console.log(response.statusCode);
	console.log(response.headers);


	response.setEncoding("utf-8");
	//接收到数据以后去掉用
	response.on("data", (chunk) => {
		responseData += chunk;
	})

	response.on("end", () => {
		//下载结束以后，解析数据，取出对应数据。
		JSON.parse(responseData).subjects.map((item) => {
			console.log(item.title + "\n");
		})
	})

	//报错
	response.on("error", (error) => {
		console.log(error);
	})
})



request.end();

/*
	1、找模块
	2、内置模块 http://nodejs.cn/api
	  第三方模块 https://www.npmjs.com/
	3、查看文档 查看文档中编写代码例子
	4、ctrl + c   ctrl + v  修改参数。

	基本功 > 初级程序员
	基本功 + 百度 > 中级程序员
	基本功 + 谷歌 + 博客 + github 高级程序员


	url  统一资源定位符
	location
*/




















