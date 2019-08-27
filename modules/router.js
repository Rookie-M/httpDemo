/*
	在这里我们对路由进行详细的操作
*/
module.exports = {
	//localhost/home
	login: function(req, res){
		res.write("登录页面");
	},
	registor: function(req, res){
		res.write("注册页面");
	},
	home: function(req, res){
		res.write("首页");
	}
}