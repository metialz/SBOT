
const {
  Client,
  RichEmbed
} = require('discord.js')
function ran (min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}
module.exports.run = async (bot, message, args) => {
  if (message.author.bot) return
  const user = message.mentions.users.first()
  const avatarEmbed = new RichEmbed()
    .setColor('RANDOM')
    .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
    .setDescription('```' + `${user.username} + ${message.author.usename} = ${ran(0, 100)}% Love!` + '```')
    .setThumbnail('https://ladyleemanila.files.wordpress.com/2015/04/giphy.gif')('https://ladyleemanila.files.wordpress.com/2015/04/giphy.gif')
    .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
  message.edit(avatarEmbed)
}

module.exports.help = {
  name: 'lovecalc'
}
