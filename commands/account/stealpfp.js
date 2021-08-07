const {
  Client,
  RichEmbed
} = require('discord.js-selfbot')
const config = require('../../config.json')
const photo = config.photo
module.exports.run = async (bot, message, args) => {
  if (message.author.bot) return
  const member = message.mentions.users.first()
  if (member) {
    bot.user.setAvatar(member.displayAvatarURL)
    const embed = new RichEmbed()
      .setColor('RANDOM')
      .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
      .setDescription('```ᴘʀᴏғɪʟᴇ ᴘɪᴄ sᴛᴇᴀʟᴇᴅ```')
      .setThumbnail(photo)
      .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
    message.edit(embed)
  } else {
    const embed = new RichEmbed()
      .setColor('RANDOM')
      .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
      .setDescription('```ᴘʟs ᴍᴇɴᴛɪᴏɴ ᴀ ᴜsᴇʀ```')
      .setThumbnail(photo)
      .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
    message.edit(embed)
  }
}

module.exports.help = {
  name: 'pfpsteal'
}
