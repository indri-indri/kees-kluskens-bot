'use strict'

require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const _ = require('lodash');

const token = process.env.TOKEN;
const bot = new TelegramBot(token, {
  polling: true
});

const conversations = [];

bot.onText(/kees/i, function (msg, match) {
  let resp = 'rot gewoon op joh kk joch';

  if (msg.text.match(/moet/ig)) {
    if (msg.text.match(/ik/ig)) {
      if (Math.random() < .5) {
        resp = 'je doet maar!';
      } else {
        resp = 'ben je mal!';
      }
    } else {
      resp = 'ik moet helemaal niks!';
    }
  }

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

bot.onText(/communis/i, function (msg, match) {
  const resp = '☭☭☭ RELIGIE IS DE OPIUM VAN HET VOLK ☭☭☭';
  bot.sendMessage(msg.chat.id, resp);
});

bot.onText(/apple/i, function (msg, match) {
  const resp = 'rip steve';
  bot.sendMessage(msg.chat.id, resp);
});

bot.onText(/me.*irl/i, function (msg, match) {
  const resp = 'me too thanks';
  bot.sendMessage(msg.chat.id, resp);
});
