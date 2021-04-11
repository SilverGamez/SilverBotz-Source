const colours = require('colors');
const servercount = require('../counters/server-count');

module.exports.run = async(client) => {
    var membercount = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)
    var guildcount = client.guilds.cache.size
    client.user.setActivity(`${guildcount} servers!`, {type: 'WATCHING'})
    const ping = Math.round(client.ws.ping)
    console.log(colours.red('┎━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓'))
    console.log(colours.green('┣  Succesfully Loaded And deployed Bot!       ┥'))
    console.log(colours.blue(`┣  Currently Running with ${ping}ms!               ┥`))
    console.log(colours.magenta('┖━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛'))
    servercount(client)
}