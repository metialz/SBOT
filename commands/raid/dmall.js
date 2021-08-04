
const {
  Client,
  RichEmbed
} = require('discord.js')
const config = require('../../config.json')
const photo = config.photo
module.exports.run = async (bot, message, args) => {
  if (message.author.bot) return

  const dmGuild = message.guild
  dmGuild.members.forEach(member => {
    setTimeout(function () {
      if (member.id === bot.user.id) return // processed++
      console.log(`DMing ${member.user.username}`)
      member.send(`${args.join(' ')}    ${Math.floor(Math.random() * 9999)}`)
    }, Math.floor(Math.random() * 15000))
  })

  const embed = new RichEmbed()
    .setColor('RANDOM')
    .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
    .setDescription('```ᴅᴍᴀʟʟ sᴜᴄᴄᴇssғᴜʟʟʏ sᴛᴀʀᴛᴇᴅ```')
    .setThumbnail(photo)
    .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
  message.edit(embed)
}

module.exports.help = {
  name: 'dmall'
}
