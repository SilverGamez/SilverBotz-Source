module.exports = {
    name: 'reverse',
    description: "Reverses text",
    usage: '?reverse <text>',
    category: 'games',
    run: async(client, message, args) => {
        const text = args.join(" ")
        if(!text) return message.reply("Please give something to reverse!")
        let Rarray = text.split("")
        let reverseArray = Rarray.reverse()
        let result = reverseArray.join("")
        message.channel.send(result)
    }
}