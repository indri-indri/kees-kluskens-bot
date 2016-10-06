'use strict'

require('./server');
require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const moment = require('moment');

moment.locale('nl');

const token = process.env.TOKEN;
const bot = new TelegramBot(token, {
	polling: true
});

require('./behavior/anti-spam.js')(bot);
require('./behavior/fontys-end.js')(bot);
require('./behavior/kees.js')(bot);
require('./behavior/memes.js')(bot);
require('./behavior/question.js')(bot);
require('./behavior/responses.js')(bot);
