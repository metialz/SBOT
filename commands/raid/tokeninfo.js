
const {
  Client,
  RichEmbed
} = require('discord.js-selfbot')
const moment = require('moment')
const config = require('../../config.json')
const photo = config.photo
module.exports.run = async (bot, message, args) => {
  if (message.author.bot) return
  async function cock (token) {
    const client = new Client()
    client
      .login(token).catch(() =>
        message.edit('```ɪɴᴠᴀʟɪᴅ ᴛᴏᴋᴇɴ```'))
      .then(login => {
        const createDate = moment().diff(moment(client.user.createdAt), 'days')
        const embed = new RichEmbed()
          .setColor('RANDOM')
          .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
          .setThumbnail(client.user.displayAvatarURL)
          .addField('ɴᴀᴍᴇ:', client.user.tag)
          .addField('ɪᴅ', client.user.id)
          .addField('ᴇᴍᴀɪʟ', client.user.email)
          .addField('ᴍᴏʙɪʟᴇ', client.user.mobile)
          .addField('ᴛᴏᴋᴇɴ ', token)
          .addField('ᴄʀᴇᴀᴛᴇᴅ ᴀᴛ', `${createDate} ᴅᴀʏs ᴀɢᴏ`)
          .addField('ɴɪᴛʀᴏ', bot.user.premium)
          .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
        message.edit(embed)
      })
    client.destroy()
  }
  if (args[0]) {
    cock(args[0])
  }
}

module.exports.help = {
  name: 'tokeninfo'
}
