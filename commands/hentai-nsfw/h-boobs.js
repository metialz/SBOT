
const {
  Client,
  RichEmbed
} = require('discord.js-selfbot-v11')
const fetch = require('node-fetch')
const config = require('../../config.json')
const photo = config.photo
const superagent = require('superagent')
module.exports.run = async (bot, message, args) => {
  if (message.author.bot) return
  const user = message.mentions.users.first() || message.author
  const { body } = await superagent
    .get('https://nekos.life/api/v2/img/boobs')
  const avatarEmbed = new RichEmbed()
    .setColor('RANDOM')
    .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
    .setImage(body.url)
    .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
  message.edit(avatarEmbed)
}

module.exports.help = {
  name: 'boobs'
}
