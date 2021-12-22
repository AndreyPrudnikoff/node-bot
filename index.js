const TelegramApi = require('node-telegram-bot-api')

const token = '5074714411:AAEIDdYgCKJOdglP8bN1rW-w_D-47QY91EM'

const bot = new TelegramApi(token, {polling: true})


bot.on('message', msg => console.log(msg))