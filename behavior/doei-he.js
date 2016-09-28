const fs = require('fs');

module.exports = function (bot) {
	bot.onText(/doei/i, msg => {
		const audio = fs.readFileSync('sounds/doeihe.wav');
		bot.sendVoice(msg.chat.id, audio);
	});
}
