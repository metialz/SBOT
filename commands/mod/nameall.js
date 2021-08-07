const {
  Client,
  RichEmbed
} = require('discord.js-selfbot-v11')
const config = require('../../config.json')
const photo = config.photo
module.exports.run = async (bot, message, args) => {
  if (message.author.bot) return

  const guild = message.guild
  const newname = args.join(' ')
  const guildmembers = message.guild.members
  guildmembers.forEach((names) => {
    names.setNickname(newname)
  })
  const embed = new RichEmbed()
    .setColor('RANDOM')
    .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
    .setDescription('```' + `ᴍᴇᴍʙᴇʀs ɴᴀᴍᴇ sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴛᴏ : ${newname}` + '```')
    .setThumbnail(photo)
    .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
  message.edit(embed)
}

module.exports.help = {
  name: 'allname'
}
