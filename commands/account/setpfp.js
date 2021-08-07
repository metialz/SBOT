const {
  Client,
  RichEmbed
} = require('discord.js-selfbot-v11')
const config = require('../../config.json')
const photo = config.photo
module.exports.run = async (bot, message, args) => {
  if (message.author.bot) return
  if (args) {
    bot.user.setAvatar(args)
    const embed = new RichEmbed()
      .setColor('RANDOM')
      .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
      .setDescription('```ᴘʀᴏғɪʟᴇ ᴘɪᴄ sᴇᴛᴛᴇᴅ```')
      .setThumbnail(photo)
      .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
    message.edit(embed)
  } else {
    const embed = new RichEmbed()
      .setColor('RANDOM')
      .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
      .setDescription('```ᴘʟs ᴘᴜᴛ ᴀ ᴘɪᴄ ʟɪɴᴋ```')
      .setThumbnail(photo)
      .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
    message.edit(embed)
  }
}

module.exports.help = {
  name: 'setpfp'
}
