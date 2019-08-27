const fs = require("fs");

/*
	写入文件
	第一个参数：写入的文件路径
	第二个参数：写入文件的内容
	第三个参数：回调函数

	【注】如果路径中不存在该目录，就会去创建
	【注】写入操作是从头开始去写的，覆盖原来的文件
*/

fs.writeFile("logs/hello.js", "奥特曼~\n", (error) => {
	if(error){
		console.log(error);
	}else{
		console.log("成功写入文件");
	}
})

/*
	在上一次写入的尾部，追加内容
*/
fs.appendFile("logs/hello.js", "你好~\n", (error) => {
	if(error){
		console.log(error);
	}else{
		console.log("又成功写入文件");
	}
});

















