const _ = require('lodash');

const conversations = [];

module.exports = function (bot) {
	bot.on('message', msg => {
		const chatId = msg.chat.id;
		const userId = msg.from.id;

		let conversation = _.find(conversations, ['chatId', msg.chat.id]);

		if (!conversation) {
			conversations.push({
				chatId,
				lastMessage: {
					userId,
					count: 0,
				},
			});

			conversation = _.find(conversations, ['chatId', msg.chat.id]);
		}

		if (conversation.lastMessage.userId === userId) {
			conversation.lastMessage.count++;
		} else {
			conversation.lastMessage = {
				userId,
				count: 1,
			};
		}

		if (conversation.lastMessage.count === 15) {
			const resp = 'KK OP MET JE SPAM';
			bot.sendMessage(msg.chat.id, resp);
		}
	});
};
