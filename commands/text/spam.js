const {
  Client,
  RichEmbed
} = require('discord.js')
const config = require('../../config.json')
const photo = config.photo
module.exports.run = async (bot, message, args) => {
  const gay = args.join(' ')
  if (!gay) return message.edit('```ᴀᴅᴅ ᴍᴇssᴀɢᴇ ᴛᴏ sᴘᴀᴍ!```').then(message => message.delete(3000))
  message.delete()
  const interval = setInterval(async function () {
    message.channel.send(gay)
  }, 900)
}

module.exports.help = {
  name: 'spam'
}
