/*
	（订阅：电视剧，出新电视剧，所有订阅者都要进行更新）
*/

const EventEmitter = require("events");

class Player extends EventEmitter{

}


var player = new Player();
//绑定事件

/*player.on("play", (track) => {
	console.log(`正在播放：《${track}》`);
})*/

player.once("play", (track) => {
	console.log(`正在播放：《${track}》`);
})


/*
	触发事件
	可以通过第二个参数，给事件函数进行传参。
*/

player.emit("play", "精绝古城");
player.emit("play", "黄皮子坟");














