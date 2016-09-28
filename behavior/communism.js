module.exports = function (bot) {
	bot.onText(/communis/i, msg => {
		const resp = '☭☭☭ RELIGIE IS DE OPIUM VAN HET VOLK ☭☭☭';
		bot.sendMessage(msg.chat.id, resp);
	});
}
