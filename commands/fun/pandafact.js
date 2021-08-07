
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

  const data = await fetch(
    'https://some-random-api.ml/facts/panda'
  ).then((res) => res.json())

  const image = await fetch(
    'https://some-random-api.ml/img/panda'
  ).then((res) => res.json())

  const avatarEmbed = new RichEmbed()
    .setColor('RANDOM')
    .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
    .setImage(image.link)
    .setDescription('```' + data.fact + '```')
    .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
  message.edit(avatarEmbed)
}

module.exports.help = {
  name: 'catfact'
}
