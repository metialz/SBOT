
const {
  Client,
  RichEmbed
} = require('discord.js')
const config = require('../../config.json')
const photo = config.photo

module.exports.run = async (bot, message, args) => {
  if (message.author.bot) return

  const uptimee = (Math.round(process.uptime() / 60))
  const embed = new RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(photo)
    .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
    .addField('```' + 'ᴜᴘᴛɪᴍᴇ:' + '```', '```' + `${uptimee} ᴍɪɴᴜᴛᴇ` + '```')
    .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.avatarURL)
  message.edit(embed)
}

module.exports.help = {
  name: 'uptime'
}
