const http = require('http');
const querystring = require("querystring");

//<1>生成要提交的数据

var postData = querystring.stringify({
	"question[title]": "什么超文本标记语言？",
	"question[content]": "什么超文本标记语言？",
	"question[courseId]": "250",
	"question[lessonId]": "2630",
	"_csrf_token": "73341470542d103bce403e965df2a53af86f4030"
});

var options = {
	hostname: "www.codingke.com",
	port: 80,
	method: "POST",
	path: "/ajax/create/course/question",
	//由于我们要提交评论，需要登录以后才能提交表单，所以在这里，需要设置header
	headers: {
			"Accept":"*/*",
			"Accept-Encoding":"gzip, deflate",
			"Accept-Language":"zh-CN,zh;q=0.9,en;q=0.8",
			"Connection":"keep-alive",
			"Content-Length":"292",
			"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
			"Cookie":"UM_distinctid=1611db505ddc2b-095bac52812bd7-32637402-13c680-1611db505de9c2; 53gid2=10149353990003; 53revisit=1516621858431; 53kf_72165667_keyword=https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3DxpzEbVxdUz1Uw9o2aogAh4VNhKCgIWN2bvOGzxk4_pbwmwP0Fkqcl_ZFFJGFUB1U%26wd%3D%26eqid%3Db576ea5700008d1a000000025a65d01d; kf_72165667_keyword_ok=1; 53kf_72165667_land_page=https%253A%252F%252Fwww.codingke.com%252F; kf_72165667_land_page_ok=1; 53uvid=1; onliner_zdfq72165667=0; visitor_type=old; looyu_id=cacb8ab59fa523cafb9190142d16b534de_20000323%3A2; Invite_code=323752; Hm_lvt_7d5fe787f1dd300413ad4b53656dc0b1=1516621858,1516879932,1516938340,1517367235; 53gid0=10149353990003; 53gid1=10149353990003; CNZZDATA1256018185=1968816230-1516619362-https%253A%252F%252Fwww.baidu.com%252F%7C1517367002; PHPSESSID=c58c7pp8auhgku8ium6lng1a54; Hm_lpvt_7d5fe787f1dd300413ad4b53656dc0b1=1517368282",
			"Host":"www.codingke.com",
			"Origin":"http://www.codingke.com",
			"Referer":"http://www.codingke.com/v/2627-lesson",
			"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36",
			"X-CSRF-Token":"73341470542d103bce403e965df2a53af86f4030",
			"X-Requested-With":"XMLHttpRequest"
	}
}



var request = http.request(options, (response) => {
	console.log(response.statusCode);


	response.setEncoding("utf-8");
	//接收到数据以后去掉用
	response.on("data", (chunk) => {
		console.log(chunk);
	})

	response.on("end", () => {
		//下载结束以后，解析数据，取出对应数据。
		console.log("技术问题提交完毕！");
	})

	//报错
	response.on("error", (error) => {
		console.log(error);
	})
})

//提交数据
request.write(postData);


request.end();












