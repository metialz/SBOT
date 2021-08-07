
const {
  Client,
  RichEmbed
} = require('discord.js-selfbot-v11')
const config = require('../../config.json')
const photo = config.photo
module.exports.run = async (bot, message, args) => {
  if (message.author.bot) return

  bot.user.setPresence({
    game: {
      name: args.join(' '),
      type: 'STREAMING',
      url: 'https://www.twitch.tv/something'
    }
  })
  console.log(args.join(' '))
  const embed = new RichEmbed()
    .setColor('RANDOM')
    .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
    .setDescription('```status : sᴛʀᴇᴀᴍɪɴɢ```' + `${args.join(' ')}`)
    .setThumbnail(photo)
    .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
  message.edit(embed)
}

module.exports.help = {
  name: 'streaming'
}
