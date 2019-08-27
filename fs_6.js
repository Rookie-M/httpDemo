const fs = require("fs");

//文件重命名，同样可以实现文件夹重命名
fs.rename("logs/hello.js", "logs/greeting.js", (error) => {
	if(error){
		console.log(error);
	}else{
		console.log("重命名成功");
	}
})