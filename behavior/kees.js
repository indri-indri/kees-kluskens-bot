module.exports = function (bot) {
	bot.onText(/^kees/i, msg => {
		let resp = 'rot gewoon op joh kk joch';

		if (msg.text.match(/moet/ig)) {
			if (msg.text.match(/ik/ig)) {
				if (Math.random() < .5) {
					resp = 'je doet maar!';
				} else {
					resp = 'ben je mal!';
				}
			} else {
				resp = 'ik moet helemaal niks!';
			}
		}

		bot.sendMessage(msg.chat.id, resp);
	});
}
