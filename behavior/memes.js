module.exports = function (bot) {
  bot.onText(/me.*irl/i, (msg) => {
    const resp = 'me too thanks';
    bot.sendMessage(msg.chat.id, resp);
  });
  bot.onText(/me too thanks/i, (msg) => {
    const resp = 'me too thanks';
    bot.sendMessage(msg.chat.id, resp);
  });
  bot.onText(/;p\[/, (msg) => {
    bot.sendSticker(msg.chat.id, 'CAADAgADYgMAAvoLtghdGzKPtFIboQI');
  });
  bot.onText(/ik.*ihe/i, (msg) => {
    const resp = 'ik ook bedankt';
    bot.sendMessage(msg.chat.id, resp);
  });
  bot.onText(/goed idee/i, (msg) => {
    if (Math.random() < 0.4) {
      const resp = 'zullen we daar een app voor maken';
      bot.sendMessage(msg.chat.id, resp);
    }
  });
};
