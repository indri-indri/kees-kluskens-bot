'use strict'

require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const _ = require('lodash');

const token = process.env.TOKEN;
const bot = new TelegramBot(token, {
  polling: true
});

const conversations = [];

bot.onText(/kees/, function (msg, match) {
  const resp = 'rot gewoon op joh kk joch';
  bot.sendMessage(msg.chat.id, resp);
});

bot.on('message', function (msg) {
  const chatId = msg.chat.id;
  const userId = msg.from.id;

  let conversation = _.find(conversations, ['chatId', msg.chat.id]);

  if (!conversation) {
    conversations.push({
      chatId,
      lastMessage: {
        userId,
        count: 0,
      }
    });

    console.log('New conversation', msg.chat);

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

  if (conversation.lastMessage.count === 5) {
    const resp = 'KK OP MET JE SPAM';
    bot.sendMessage(msg.chat.id, resp);
  }
});

bot.onText(/communis/, function (msg, match) {
  const resp = '☭☭☭ RELIGIE IS DE OPIUM VAN HET VOLK ☭☭☭';
  bot.sendMessage(msg.chat.id, resp);
});

bot.onText(/apple/, function (msg, match) {
  const resp = 'rip steve';
  bot.sendMessage(msg.chat.id, resp);
});
