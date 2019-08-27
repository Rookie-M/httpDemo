//创建spider.js文件编写网络爬虫案例
//1、引入模块
var https = require("https");

//2、设置要去爬取的网站
var url = "https://suyun.daojia.com/?hmsr=baidupzpc2018101";

//3、通过https模块去请求这个链接，在回调函数中接收数据
https.get(url, function(res){
	var html = "";

	//4、这个事件在每次接收到数据触发
	res.on("data", function(data){
		html += data;
	})

	//5、数据请求结束的时候，输出数据
	res.on("end", function(){
		// console.log(html);

		//将需要的数据解析出来
		var result = filterMenu(html);
		// console.log(result);
		printMenu(result);
	})

	//6、设置错误，捕获错误
	res.on("error", function(err){
		console.log(err); 
	})
})

// 定义一个输出的函数
function printMenu(menu){
	menu.forEach(function(item){
		console.log(item.menuTitle + "\n");
		item.menulist.forEach(function(item){
			console.log(item);
		})
	})
}

/*
	【注】在这里我们进一步抓取数据，通过选择器的方式去选取这个部分。
	需要引入一个模块。这个模块本地没有，需要从第三方下载 cheerio
*/

//编写过滤数据的函数
var cheerio = require("cheerio");
function filterMenu(html){
	//<1>加载下载到的数据

	var $ = cheerio.load(html);

	//<2>获取需要的节点，可以类似JQ选择器操作
	var menu = $(".w");

	//<3>进行解析

	var menuData = [];

	menu.each(function(index, item){
		// var locationCarInfo = {};
		// locationCarInfo.city = $(item).
		//获取一级标题
		var menuTitle = $(item).find("li").text();
		var menuLists = $(item).find("dl");

		var menulistArr = [];

		menuLists.each(function(index, item){
			menulistArr.push($(item).text());
		})

		menuData.push({
			menuTitle: menuTitle,
			menulist: menulistArr
		})
	})
	return menuData;
}


























