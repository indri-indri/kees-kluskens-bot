module.exports = function (bot) {
	bot.onText(/\b(grap)\b/i, msg => {
		const resp = 'je LEVEN is een grap!';
		bot.sendMessage(msg.chat.id, resp);
	});
}
