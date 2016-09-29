const got = require('got');

module.exports = function (bot) {
	bot.onText(/\?$/, msg => {
		const query = msg.text.replace(/[^a-zA-Z0-9 ]/g, '');
		const url = `https://duckduckgo.com/?q=!ducky+${encodeURIComponent(query)}`

		got(url)
			.then(response => {
				const responseUrl = response.body.match(/=http(.*?)(?=')/)[0].substring(1);
				const responseUrlDecoded = decodeURIComponent(responseUrl);

				bot.sendMessage(msg.chat.id, responseUrlDecoded);
			});
	});
}
