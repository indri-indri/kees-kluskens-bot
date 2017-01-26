const moment = require('moment');

const theEnd = moment('2017-01-28T00:00:00+00:00');

module.exports = function (bot) {
	bot.onText(/lijden/i, msg => {
		const now = moment();

		const daysLeft = theEnd.diff(now, 'days');
		const monthsLeft = theEnd.diff(now, 'months', true);
		
		let resp = `nog ${daysLeft} dagen (${monthsLeft.toFixed(1)} maanden) tot de WEDERGEBOORTE op 28 januari 2017`;
		
		if (daysLeft < 1) {
			resp = 'Vive la révolution!';
			bot.sendSticker(msg.chat.id, 'BQADBAADOQEAAqBWfgAB2V2T9yivgk8C');
			bot.sendSticker(msg.chat.id, 'BQADBAADOQEAAqBWfgAB2V2T9yivgk8C');
			bot.sendSticker(msg.chat.id, 'BQADBAADOQEAAqBWfgAB2V2T9yivgk8C');
			bot.sendSticker(msg.chat.id, 'BQADBAADOQEAAqBWfgAB2V2T9yivgk8C');
			bot.sendSticker(msg.chat.id, 'BQADBAADOQEAAqBWfgAB2V2T9yivgk8C');
			bot.sendSticker(msg.chat.id, 'BQADBAADOQEAAqBWfgAB2V2T9yivgk8C');
			bot.sendSticker(msg.chat.id, 'BQADBAADOQEAAqBWfgAB2V2T9yivgk8C');
			bot.sendSticker(msg.chat.id, 'BQADBAADOQEAAqBWfgAB2V2T9yivgk8C');
			bot.sendSticker(msg.chat.id, 'BQADBAADOQEAAqBWfgAB2V2T9yivgk8C');
			bot.sendSticker(msg.chat.id, 'BQADBAADOQEAAqBWfgAB2V2T9yivgk8C');
			bot.sendSticker(msg.chat.id, 'BQADBAADOQEAAqBWfgAB2V2T9yivgk8C');
			bot.sendSticker(msg.chat.id, 'BQADBAADOQEAAqBWfgAB2V2T9yivgk8C');
		}

		bot.sendMessage(msg.chat.id, resp);
	});
};
