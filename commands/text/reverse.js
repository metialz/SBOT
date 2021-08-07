const {
  Client,
  RichEmbed
} = require('discord.js-selfbot-v11')
const config = require('../../config.json')
const photo = config.photo
module.exports.run = async (bot, message, args) => {
  if (args.length < 1) {
    const embed = new RichEmbed()
      .setDescription('```ᴘʟᴇᴀsᴇ ᴇɴᴛᴇʀ ᴀ sᴇɴᴛᴇɴᴄᴇ ᴏʀ ᴡᴏʀᴅ ᴛᴏ ʀᴇᴠᴇʀsᴇ```')
      .setColor('RANDOM')
      .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
      .setThumbnail(photo)
      .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
    message.edit(embed)
    return
  }
  const haste = args.slice(0).join(' ')
  const embed = new RichEmbed()
    .setColor('RANDOM')
    .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
    .setDescription(haste.split('').reverse().join(''))
    .setThumbnail(photo)
    .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
  message.edit(embed)
}

module.exports.help = {
  name: 'reverse'
}
