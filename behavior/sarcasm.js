module.exports = function (bot) {
	bot.onText(/;p\[/, msg => {
		bot.sendSticker(msg.chat.id, 'BQADBAADOQEAAqBWfgAB2V2T9yivgk8C');
	});
}
