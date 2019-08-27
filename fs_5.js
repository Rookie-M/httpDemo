const fs = require("fs");

/*
	读取某个文件夹下的列表内容
*/
fs.readdir("logs", (error, files) => {
	if(error){
		console.log(error);
	}else{
		console.log(files);
	}
})
