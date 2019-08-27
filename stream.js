const fs = require("fs");
//压缩模块
const zlib = require("zlib");

/*
	读取一个文件中的内容
	文件读取流
*/
var fileReadStream = fs.createReadStream("data.json");

/*
	写入文件
	文件写入流，并且压缩
*/
var fileWriteStream = fs.createWriteStream("data1.json.gz");

/*
	监听一下写入的内容

*/
fileWriteStream.on("pipe", (source) => {
	console.log(source);
})


fileReadStream
	.pipe(zlib.createGzip())
	.pipe(fileWriteStream);


/*
	设置计数，查看是否是分批次加载的
*/
/*var count = 0; 

fileReadStream.on("data", (chunk) => {
	console.log(`${count++} 接收到：${chunk.length}`);
})

fileReadStream.once("data", (chunk) => {
	console.log(`${count++} 接收到：${chunk.length}`);
})


fileReadStream.on("end", () => {
	console.log("结束");
})

fileReadStream.on("error", (error) => {
	console.log(error);
})

*/







