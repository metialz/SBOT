
const {
  Client,
  RichEmbed
} = require('discord.js-selfbot-v11')
const config = require('../../config.json')
const photo = config.photo
module.exports.run = async (bot, message, args) => {
  if (message.author.bot) return
  message.guild.members.get(message.author.id).setNickname('᲼')
  bot.user.setAvatar('https://cdn.discordapp.com/attachments/791972595691814912/794110000385359882/Transparent.png')
  const embed = new RichEmbed()
    .setColor('RANDOM')
    .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
    .setDescription('```ʏᴏᴜ ᴀʀᴇ ɢʜᴏsᴛ ɴᴏᴡ```')
    .setThumbnail(photo)
    .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
  message.edit(embed)
}

module.exports.help = {
  name: 'ghost'
}
