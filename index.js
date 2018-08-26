const Commando = require('discord.js-commando');
const bot = new Commando.Client({owner: '248712771368255488'});
const TOKEN = ('NDgzMjU3MjgxNTQzMjc0NTA2.DmQz_w.7UlNUh7DPJRCKYxCOHMpd9dtKCI');

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.login(process.env.TOKEN);
