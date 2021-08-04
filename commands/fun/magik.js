
const {
  Client,
  RichEmbed
} = require('discord.js')
const fetch = require('node-fetch')
const config = require('../../config.json')
const photo = config.photo
const superagent = require('superagent')
module.exports.run = async (bot, message, args) => {
  if (message.author.bot) return
  const user = message.mentions.users.first() || message.author
  const avatarEmbed = new RichEmbed()
    .setColor('RANDOM')
    .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
    .setImage(`https://nekobot.xyz/api/imagegen?type=magik&image=${user.displayAvatarURL}&intensity=1&raw=1`)
    .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
  message.edit(avatarEmbed)
}

module.exports.help = {
  name: 'magik'
}