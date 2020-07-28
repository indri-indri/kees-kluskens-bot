const _ = require('lodash');
const got = require('got');

const conversations = [];

module.exports = function (bot) {
  bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;

    let conversation = _.find(conversations, ['chatId', msg.chat.id]);

    if (conversation && conversation.lastMessage.text === msg.text) {
      bot.sendMessage(msg.chat.id, msg.text);
    }

    if (conversation && msg.text.match(/^\?\?*.$/)) {
      const query = conversation.lastMessage.text.replace(/[^a-zA-Z0-9 ]/g, '');
      const url = `https://duckduckgo.com/?q=!ducky+${encodeURIComponent(
        query
      )}&kl=nl-nl`;

      got(url).then((response) => {
        const responseUrl = response.body
          .match(/=http(.*?)(?=')/)[0]
          .substring(1);
        const responseUrlDecoded = decodeURIComponent(responseUrl);

        bot.sendMessage(msg.chat.id, responseUrlDecoded);
      });

      return;
    }

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

    conversation.lastMessage = {
      userId,
      count:
        conversation.lastMessage.userId === userId
          ? conversation.lastMessage.count + 1
          : 1,
      text: msg.text,
    };

    if (conversation.lastMessage.count === 15) {
      const resp = 'KK OP MET JE SPAM';
      bot.sendMessage(msg.chat.id, resp);
    }
  });
};
