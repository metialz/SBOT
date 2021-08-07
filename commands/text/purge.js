const {
  Client,
  RichEmbed
} = require('discord.js-selfbot-v11')
const config = require('../../config.json')
const photo = config.photo
module.exports.run = async (bot, message, args) => {
  if (args[0] < 1 || args.length < 1) {
    return message.edit("`You can't purge <= 0 messages!`").then(message => message.delete(2000))
  };
  const count = parseInt(args[0] || 1)
  message.channel.fetchMessages({
    limit: 100
  }).then(async messages => {
    let msgArray = messages.array()
    msgArray = msgArray.filter(m => m.author.id === bot.user.id)
    msgArray.length = count + 1
    msgArray.map(m => m.delete())
    await message.channel.send('*Purged* ' + ` \`${args[0]}/${args[0]}\`` + ' *messages!*').then(message => message.delete(1500))
  })
}

module.exports.help = {
  name: 'purge'
}
