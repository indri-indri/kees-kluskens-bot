const moment = require('moment');

const theEnd = moment('2017-02-10T12:11:42+00:00');

module.exports = function (bot) {
	bot.onText(/lijden/i, msg => {
		const now = moment();

		const daysLeft = theEnd.diff(now, 'days');
		const monthsLeft = theEnd.diff(now, 'months', true);

		const resp = `Nog ${daysLeft} dagen, of ${monthsLeft.toFixed(1)} maanden tot De Wedergeboorte op 10 februari 2017.`;

		bot.sendMessage(msg.chat.id, resp);
	});
};
