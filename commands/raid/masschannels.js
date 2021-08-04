
const {
  Client,
  RichEmbed
} = require('discord.js')
const config = require('../../config.json')
const photo = config.photo
module.exports.run = async (bot, message, args) => {
  if (message.author.bot) return

  if (args.length < 2) return message.edit('`Please enter text channel name and channels`').then(message => message.delete(5000))
  message.delete()
  for (let i = 0; i < 100; i++) {
    message.guild.createChannel(args.join(' '), 'text')
    message.guild.createChannel(args.join(' '), 'voice')
  }

  const embed = new RichEmbed()
    .setColor('RANDOM')
    .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
    .setDescription('```ᴍᴀss ᴄʜᴀɴɴᴇʟ sᴛᴀʀᴛᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ```')
    .setThumbnail(photo)
    .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
  message.edit(embed)
}

module.exports.help = {
  name: 'masschannels'
}
