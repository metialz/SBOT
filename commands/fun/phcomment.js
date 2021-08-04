
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
  const data = await fetch(
    `https://nekobot.xyz/api/imagegen?type=phcomment&image=${user.displayAvatarURL}&text=${args.join(' ')}&username=${user.tag}&raw=1`
  )
    .then((res) => res.json())
  const avatarEmbed = new RichEmbed()
    .setColor('RANDOM')
    .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
    .setImage(data.message)
    .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
  message.edit(avatarEmbed)
}

module.exports.help = {
  name: 'phcomment'
}
