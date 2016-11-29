module.exports = function (bot) {
	bot.onText(/^kees/i, msg => {
		let resp;

		if (msg.text.match(/moet/i)) {
			if (msg.text.match(/ik/i)) {
				if (Math.random() < .5) {
					resp = 'haha ja';
				} else {
					resp = 'ben je mal!';
				}
			} else {
				resp = 'ik moet helemaal niks!';
			}
		} else if (msg.text.match(/\b(kun|kan|wil)\b/i)) {
			resp = 'ik ben bezig met een webpack core meeting';
		} else {
			resp = 'mavic pro';
		}

		bot.sendMessage(msg.chat.id, resp);
	});
};
