
const {
  Client,
  RichEmbed
} = require('discord.js-selfbot')
const moment = require('moment')

module.exports.run = async (bot, message, args) => {
  if (message.author.bot) return

  const createDate = moment().diff(moment(message.guild.createdAt), 'days')
  const members = message.guild.memberCount
  const embed = new RichEmbed()
    .setAuthor(message.guild, message.guild.iconURL, 'https://discord.gg/5n7TJMez')
    .setColor('RANDOM')
    .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
    .addField(':id: sᴇʀᴠᴇʀ ɪᴅ', message.guild.id, true)
    .addField(':calendar: ᴄʀᴇᴀᴛᴇᴅ ᴀᴛ', `${createDate} ᴅᴀʏs ᴀɢᴏ`, true)
    .addField(':crown: ᴏᴡɴᴇᴅ ʙʏ', message.guild.ownerID, true)
    .addField(':busts_in_silhouette: ᴍᴇᴍʙᴇʀs', ` (${members})`, true)
    .addField(':earth_africa: ʀᴇɢɪᴏɴ', message.guild.region, true)
    .addField(':closed_lock_with_key: ᴠᴇʀɪғʏ ʟᴇᴠᴇʟ', message.guild.verificationLevel, true)
    .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
  message.edit(embed)
}

module.exports.help = {
  name: 'serverinfo'
}
