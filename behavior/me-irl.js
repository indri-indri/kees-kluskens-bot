module.exports = function (bot) {
	bot.onText(/me.*irl/i, msg => {
		const resp = 'me too thanks';
		bot.sendMessage(msg.chat.id, resp);
	});
	bot.onText(/me too thanks/i, msg => {
		const resp = 'me too thanks';
		bot.sendMessage(msg.chat.id, resp);
	});
}
