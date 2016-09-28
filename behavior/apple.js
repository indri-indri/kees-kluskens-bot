module.exports = function (bot) {
	bot.onText(/apple/i, msg => {
		const resp = 'rip steve';
		bot.sendMessage(msg.chat.id, resp);
	});
}
