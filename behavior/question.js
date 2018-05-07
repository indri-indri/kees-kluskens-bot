const got = require('got');

module.exports = function(bot) {
	bot.onText(/\?\?$/, msg => {
		const query = msg.text.replace(/\?/g, '');

		if (!query) {
			return;
		}

		const url = `https://duckduckgo.com/?q=!ducky+${encodeURIComponent(
			query
		)}&kl=nl-nl`;

		got(url).then(response => {
			const responseUrl = response.body
				.match(/=http(.*?)(?=')/)[0]
				.substring(1);
			const responseUrlDecoded = decodeURIComponent(responseUrl);

			bot.sendMessage(msg.chat.id, responseUrlDecoded);
		});
	});

	bot.onText(/\?\?\💩$/, msg => {
		const query = msg.text.replace(/\?/g, '').slice(0, -2);

		if (!query) {
			return;
		}

		const url = `https://www.bing.com/search?q=${encodeURIComponent(
			query
		)}`;

		got(url).then(response => {
			const responseUrl = response.body
				.split('b_algo')[1]
				.match(/<a href="([^<]+)" /)[0]
				.substring('<a href="'.length)
				.slice(0, -2);
			const responseUrlDecoded = decodeURIComponent(responseUrl);

			bot.sendMessage(msg.chat.id, responseUrlDecoded);
		});
	});
};
