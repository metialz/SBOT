
const {
  Client,
  RichEmbed
} = require('discord.js-selfbot')
const request = require('request')
const config = require('../../config.json')
const photo = config.photo
module.exports.run = async (bot, message, args) => {
  if (message.author.bot) return

  const HypeSquad = `${'https://discordapp.com/api/v6/hypesquad/online'}`
  request(HypeSquad, {
    method: 'POST',
    headers: {
      authorization: config.token,
      '\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65': 'application/json',
      '\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36'
    },
    body: JSON.stringify({
      house_id: 1
    })
  })
  const embed = new RichEmbed()
    .setColor('RANDOM')
    .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
    .setDescription('```ʜʏᴘᴇ sǫᴜᴀᴅ ᴄʜᴀɴɢᴇᴅ ᴛᴏ : ʙʀᴀᴠᴇʀʏ```')
    .setThumbnail(photo)
    .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
  message.edit(embed)
}

module.exports.help = {
  name: 'hqbravery'
}
