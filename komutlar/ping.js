const Discord = require('discord.js');
exports.run = async(client, message) => {
    message.channel.send(`Bot pingi : ` + client.ws.ping + `ms`);
}
exports.conf = {
    enabled : true,
    guildOnly : false,
    aliases : [''],
    permLevel : 0
}
exports.help = {
    name : 'ping',
    description : '',
    usage : '!ping'
}
