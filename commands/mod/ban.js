
const {
  Client,
  RichEmbed
} = require('discord.js-selfbot-v11')
const config = require('../../config.json')
const photo = config.photo
module.exports.run = async (bot, message, args) => {
  if (message.author.bot) return

  const mentionMember = message.mentions.members.first()
  if (!mentionMember) {
    message.edit('pls mention member witch you need to ban')
      .then(message => message.delete(6000))
    return
  }

  mentionMember.ban()

  const embed = new RichEmbed()
    .setColor('RANDOM')
    .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
    .setDescription('```' + `sᴜᴄᴄᴇssғᴜʟʟʏ ʙᴀɴɴᴇᴅ ${mentionMember}` + '```')
    .setThumbnail(photo)
    .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
  message.edit(embed)
}

module.exports.help = {
  name: 'ban'
}
