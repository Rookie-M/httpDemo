const fs = require("fs");

//创建一个文件夹
fs.mkdir("logs", (error) => {
	if(error){
		console.log(error);
	}else{
		console.log("成功创建目录： logs");
	}
})