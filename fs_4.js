const fs = require("fs");

/*
	读取文件的内容
*/
/*fs.readFile("logs/hello.data", (error, data) => {
	if(error){
		console.log(error);
	}else{

		//默认输入输出的Buffer格式
		console.log(data.toString());
	}
})*/

/*
	第二参数： 编码方式
*/

fs.readFile("logs/hello.data", "utf-8", (error, data) => {
	if(error){
		console.log(error);
	}else{

		//默认输入输出的Buffer格式
		console.log(data);
	}
})















