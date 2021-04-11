const Discord = require('discord.js');
const mainSettings = require('../../config.json');

module.exports = {
    name: 'eval',
    description: "Executes code",
    usage: "?eval <code>",
    aliases: ['execute'],
    category: 'botdev',
    run: async(client, message, args)  => {
        if(message.author.id == "737862913309540413"){
            try{ 
      var result = message.content.split(" ").slice(1).join(" ")
      if(!result) return
        let evaled = eval(result);
            } catch (e) {
                message.channel.send(`${e}`)
                return;
            }
      } else return;
    }
}