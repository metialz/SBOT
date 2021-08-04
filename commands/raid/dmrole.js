
const {
  Client,
  RichEmbed
} = require('discord.js')
const config = require('../../config.json')
const photo = config.photo
module.exports.run = async (bot, message, args) => {
  if (message.author.bot) return

  const role = message.mentions.roles.first()
  const msg = args.join(' ')

  if (!role) {
    message.author.send('No valid role mentioned!')
    return
  }

  if (!msg || msg.length <= 0) {
    message.author.send('Specify a message!')
    return
  }

  role.members.forEach(member => {
    setTimeout(function () {
      if (member.id === bot.user.id) return
      console.log(`DMing ${member.user.username}`)
      member.send(`${msg} ${Math.floor(Math.random() * 9999)}`)
    }, Math.floor(Math.random() * 15000))
  })

  const embed = new RichEmbed()
    .setColor('RANDOM')
    .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
    .setDescription('```ᴅᴍʀᴏʟᴇ sᴜᴄᴄᴇssғᴜʟʟʏ sᴛᴀʀᴛᴇᴅ```')
    .setThumbnail(photo)
    .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
  message.edit(embed)
}

module.exports.help = {
  name: 'dmrole'
}
