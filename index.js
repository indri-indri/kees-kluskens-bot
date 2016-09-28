'use strict'

require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const moment = require('moment');

moment.locale('nl');

const token = process.env.TOKEN;
const bot = new TelegramBot(token, {
	polling: true
});

require('./behavior/kees.js')(bot);
require('./behavior/anti-spam.js')(bot);
require('./behavior/fontys-end.js')(bot);
require('./behavior/communism.js')(bot);
require('./behavior/apple.js')(bot);
require('./behavior/me-irl.js')(bot);
require('./behavior/sarcasm.js')(bot);
require('./behavior/doei-he.js')(bot);
require('./behavior/inb4.js')(bot);
require('./behavior/joke.js')(bot);
