const {
  Client,
  RichEmbed
} = require('discord.js-selfbot-v11')
const config = require('../../config.json')
const photo = config.photo
module.exports.run = async (bot, message, args) => {
  message.channel.startTyping()
  const embed = new RichEmbed()
    .setDescription('```ᴛʏᴘɪɴɢ sᴛᴀʀᴛᴇᴅ```')
    .setColor('RANDOM')
    .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
    .setThumbnail(photo)
    .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
  message.edit(embed)
}

module.exports.help = {
  name: 'typing'
}
