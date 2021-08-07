const {
  Client,
  RichEmbed
} = require('discord.js-selfbot-v11')
const moment = require('moment')

module.exports.run = async (bot, message, args) => {
  if (message.author.bot) return

  const member = message.mentions.users.first() || message.author

  const createDate = moment().diff(moment(member.createdAt), 'days')
  const embed = new RichEmbed()
    .setAuthor(member.username, member.avatarURL, 'https://discord.gg/5n7TJMez')
    .setColor('RANDOM')
    .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
    .setThumbnail(member.avatarURL)
    .addField('ᴊᴏɪɴᴇᴅ ᴅɪsᴄᴏʀᴅ ᴀᴛ:', `${createDate} ᴅᴀʏs ᴀɢᴏ`)
    .addField('ᴜsᴇʀ ɪᴅ:', member.id)
    .addField('ᴜsᴇʀɴᴀᴍᴇ:', member.tag)
    .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.avatarURL)
  message.edit(embed)
}
module.exports.help = {
  name: 'whois'
}
