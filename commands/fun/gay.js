
const {
  Client,
  RichEmbed
} = require('discord.js-selfbot-v11')
const fetch = require('node-fetch')
const config = require('../../config.json')
const photo = config.photo
const superagent = require('superagent')
function ran (min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}
module.exports.run = async (bot, message, args) => {
  if (message.author.bot) return
  const user = message.mentions.users.first() || message.author
  const avatarEmbed = new RichEmbed()
    .setColor('RANDOM')
    .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
    .setDescription('```' + `${user.username} is ${ran(0, 100)}% Gay!` + '```')
    .setThumbnail(`https://some-random-api.ml/canvas/gay?avatar=${user.displayAvatarURL}`)
    .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
  message.edit(avatarEmbed)
}

module.exports.help = {
  name: 'Gay'
}
