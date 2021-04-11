const Discord = require('discord.js');

module.exports.run = async(client, guild) => {
    const mainChannel = guild.systemChannel
    if(!mainChannel) return
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`Hello! My prefix is \`?\`\nStart with \`${prefix}help\``)
    .setFooter(`Thanks to inviting me to ${guild}`)

    mainChannel.send(embed)
}