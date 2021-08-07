const {
  Client,
  RichEmbed
} = require('discord.js-selfbot')
const config = require('../../config.json')
const photo = config.photo
const zalgoo = require('zalgolize')
module.exports.run = async (bot, message, args) => {
  if (args.length < 1) {
    const embed = new RichEmbed()
      .setDescription('ᴘʟᴇᴀsᴇ ᴇɴᴛᴇʀ ᴀ sᴇɴᴛᴇɴᴄᴇ ᴏʀ ᴡᴏʀᴅ ᴛᴏ ᴢᴀʟɢᴏ')
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
    .setDescription('```' + `\u180E${zalgoo(args.join(' '), 0.2, [10, 5, 10])}` + '```')
    .setThumbnail(photo)
    .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
  message.edit(embed)
}

module.exports.help = {
  name: 'zalgo'
}
