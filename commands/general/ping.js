const {
  Client,
  RichEmbed
} = require('discord.js')
const config = require('../../config.json')
const photo = config.photo

module.exports.run = async (bot, message, args) => {
  if (message.author.bot) return

  const embed = new RichEmbed()
    .setTitle('```🏓 ᴘᴏɴɢ!```')
    .setColor('RANDOM')
    .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.avatarURL)
    .setThumbnail(photo)
  message.channel.send(embed)
}

module.exports.help = {
  name: 'ping'
}
