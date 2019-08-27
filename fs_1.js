//1、引入模块
const fs = require("fs");

//1、通过fs模块读取hello.js文件
/*
	第一个参数是读取的文件地址
	第二个参数是，回调函数
*/
fs.stat("hello.js", (error, stats) => {
	if(error){
		console.log(error);
	}else{
		//2、读取当前的数据，判断是文件还是目录，返回true/false
		console.log(stats);
		console.log(`文件：${stats.isFile()}`);
		console.log(`目录：${stats.isDirectory()}`);
	}
})

