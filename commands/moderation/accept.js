const Discord = require('discord.js');

module.exports = {
    name: 'accept',
    description: "Used in some servers",
    usage: '?accpet',
    category: 'moderation',
    run: async(client, message, args) => {
        message.member.roles.add(message.guild.roles.cache.find(role => role.name === '*.·:+·.•》Pokémon Trainers')).catch(err => message.reply('You cant use that in this server!'))
            .then(message.delete()) 
    }
}