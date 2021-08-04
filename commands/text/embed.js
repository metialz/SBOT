const {
  Client,
  RichEmbed
} = require('discord.js')
const config = require('../../config.json')
const photo = config.photo
const zalgoo = require('zalgolize')
module.exports.run = async (bot, message, args) => {
  if (args.length < 1) {
    const embed = new RichEmbed()
      .setDescription('ᴘʟᴇᴀsᴇ ᴇɴᴛᴇʀ ᴀ sᴇɴᴛᴇɴᴄᴇ ᴏʀ ᴡᴏʀᴅ ᴛᴏ ᴇᴍʙᴇᴅ')
      .setColor('RANDOM')
      .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
      .setThumbnail(photo)
      .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
    message.edit(embed)
    return
  }
  const embed = new RichEmbed()
    .setColor('RANDOM')
    .setTitle('Choose Role')
   // .setDescription('```' + `${args.join(' ')}` + '```')
	.setDescription(`${args.join(' ')}`)
    .setThumbnail(photo)
    .setFooter('『LifeAfter』', message.author.displayAvatarURL)
  message.edit(embed)
}

module.exports.help = {
  name: 'embed'
}
