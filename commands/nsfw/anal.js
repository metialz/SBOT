
const {
  Client,
  RichEmbed
} = require('discord.js-selfbot-v11')
const config = require('../../config.json')
const photo = config.photo
const superagent = require('superagent')
module.exports.run = async (bot, message, args) => {
  if (message.author.bot) return
  const { body } = await superagent
    .get('https://nekobot.xyz/api/image?type=anal')
  const avatarEmbed = new RichEmbed()
    .setColor('RANDOM')
    .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
    .setImage(body.message)
    .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
  message.edit(avatarEmbed)
}

module.exports.help = {
  name: 'anal'
}
