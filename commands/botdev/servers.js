const Discord = require('discord.js');

module.exports = {
    name: 'servers',
    description: "Shows all the servers the bot is in",
    usage: '?servers',
    category: 'botdev',
    run: async(client, mesasge, args) => {
        let botdevid = '737862913309540413'
    if(message.author.id === botdevid){
      await (100) 
      let guilds = client.guilds.cache.array().join('\n')
      const embed = new Discord.MessageEmbed()
      .setDescription(`I am in ${client.guilds.cache.size} Servers and the names are:\n\n**${guilds}**`)
      .setTimestamp()
      message.author.send(embed)
      } else return;
    }
}