const moment = require('moment');

const theEnd = moment('2017-02-03T12:11:42+00:00');

module.exports = function (bot) {
	bot.onText(/lijden/i, msg => {
		const now = moment();

		const daysLeft = theEnd.diff(now, 'days');
		const monthsLeft = theEnd.diff(now, 'months', true);

		const resp = `nog ${daysLeft} dagen (${monthsLeft.toFixed(1)} maanden) tot de WEDERGEBOORTE op 3 februari 2017`;

		bot.sendMessage(msg.chat.id, resp);
	});
};
