module.exports = function (bot) {
	bot.onText(/^inb4/i, msg => {
		const resp = 'inb4 opkankeren';
		bot.sendMessage(msg.chat.id, resp);
	});
}
