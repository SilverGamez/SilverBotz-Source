const discord = require('discord.js');
module.exports = {
    name: 'allow',
    description: "Used in a private poketwo server",
    usage: "?allow @user",
    category: "botdev",
    run: async (client, message, args) => {
        if(message.author.id === '737862913309540413'){

            let channelNumber = args[0];
            let userId = message.mentions.members.first();
        
            if(!channelNumber) return message.channel.send('Channel number required!');
            if(!isNaN(args[0])) return message.channel.send('Thats not a valid channel number')
            if(!userId) return message.channel.send('Mention user required!');
            let channelFound = message.guild.channels.cache.find(channel => channel.name === channelNumber)
            channelFound.overwritePermissions([
              {
                id: userId.id,
                allow: ["SEND_MESSAGES"]
              },
            ]);
            setTimeout(() => {
              channelFound.overwritePermissions([
                {
                  id: userId.id,
                  deny: ["SEND_MESSAGES"]
                }
              ])
            }, 60000)
            channelFound.send(`${userId} the pokemon is here!`)
          } else return;
    }
}