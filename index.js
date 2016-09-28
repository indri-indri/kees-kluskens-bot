'use strict'

require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const _ = require('lodash');
const moment = require('moment');
const got = require('got');

moment.locale('nl');

const token = process.env.TOKEN;
const bot = new TelegramBot(token, {
	polling: true
});
const theEnd = moment('2017-02-10T12:11:42+00:00');
const conversations = [];

bot.onText(/kees/i, msg => {
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
			}
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

	if (conversation.lastMessage.count === 5) {
		const resp = 'KK OP MET JE SPAM';
		bot.sendMessage(msg.chat.id, resp);
	}
});

bot.onText(/communis/i, msg => {
	const resp = '☭☭☭ RELIGIE IS DE OPIUM VAN HET VOLK ☭☭☭';
	bot.sendMessage(msg.chat.id, resp);
});

bot.onText(/apple/i, msg => {
	const resp = 'rip steve';
	bot.sendMessage(msg.chat.id, resp);
});

bot.onText(/me.*irl/i, msg => {
	const resp = 'me too thanks';
	bot.sendMessage(msg.chat.id, resp);
});

bot.onText(/;p\[/, msg => {
	bot.sendSticker(msg.chat.id, 'BQADBAADOQEAAqBWfgAB2V2T9yivgk8C');
});

bot.onText(/doei/i, msg => {
	const audio = fs.readFileSync('sounds/doeihe.wav');
	bot.sendVoice(msg.chat.id, audio);
});

bot.onText(/^inb4/i, msg => {
	const resp = 'inb4 opkankeren';
	bot.sendMessage(msg.chat.id, resp);
});

bot.onText(/\b(grap)\b/i, msg => {
	const resp = 'je LEVEN is een grap!';
	bot.sendMessage(msg.chat.id, resp);
});

bot.onText(/\?$/, msg => {
	const textClean = msg.text.replace(/[^a-zA-Z0-9 ]/g, '');
	const query = textClean.replace(/\s+/g, '+');
	const url = `http://www.google.com/search?q=${query}&btnI`;

	got(url)
		.then(response => {
			const responseUrl = response.socket._httpMessage.socket._httpMessage.socket._httpMessage.res.url;

			if (responseUrl.match(/google/ig)) {
				return;
			}

			const resp = `[ ](${responseUrl})`;
			bot.sendMessage(msg.chat.id, resp, {
				parse_mode: 'Markdown',
			});
		});
});

bot.onText(/lijden/i, msg => {
	const now = moment();

	const daysLeft = theEnd.diff(now, 'days');
	const monthsLeft = theEnd.diff(now, 'months', true);

	const resp = `Nog ${daysLeft} dagen, of ${monthsLeft.toFixed(1)} maanden tot De Wedergeboorte op 10 februari 2017.`;

	bot.sendMessage(msg.chat.id, resp);
});
