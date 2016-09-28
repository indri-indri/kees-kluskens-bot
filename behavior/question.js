const got = require('got');

module.exports = function (bot) {
	bot.onText(/\?$/, msg => {
		const textClean = msg.text.replace(/[^a-zA-Z0-9 ]/g, '');
		const query = textClean.replace(/\s+/g, '+');
		const url = `http://www.google.com/search?q=${query}&btnI`;

		got(url)
			.then(response => {
				const responseUrl = response.socket._httpMessage.socket._httpMessage.socket._httpMessage.res.url;

				const resp = `[ ](${responseUrl})`;
				bot.sendMessage(msg.chat.id, resp, {
					parse_mode: 'Markdown',
				});
			});
	});
}
