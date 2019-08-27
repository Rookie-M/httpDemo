const fs = require("fs");

fs.readdirSync("logs").map((file) => {
	fs.unlink(`logs/${file}`, (error) => {
		if(error){
			console.log(error);
		}else{
			console.log(`成功删除了：${file}`);
		}
	})
})

/*
	如果目录下有文件，是不能直接删除的
	现将目录下的文件删除
*/

fs.rmdir("logs", (error) => {
	if(error){
		console.log(error);
	}else{
		console.log("成功删除了目录：logs");
	}
})