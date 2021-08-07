const {
  Client,
  RichEmbed
} = require('discord.js-selfbot')
const config = require('../../config.json')
const photo = config.photo
module.exports.run = async (bot, message, args) => {
  const messageList = [
    'ɪᴛ ɪs ᴄᴇʀᴛᴀɪɴ.',
    'ɪᴛ ɪs ᴅᴇᴄɪᴅᴇᴅʟʏ sᴏ.',
    'ᴡɪᴛʜᴏᴜᴛ ᴀ ᴅᴏᴜʙᴛ.',
    'ʏᴇs - ᴅᴇғɪɴɪᴛᴇʟʏ.',
    'ʏᴏᴜ ᴍᴀʏ ʀᴇʟʏ ᴏɴ ɪᴛ.',
    'ᴀs ɪ sᴇᴇ ɪᴛ, ʏᴇs.',
    'ᴍᴏsᴛ ʟɪᴋᴇʟʏ.',
    'ᴏᴜᴛʟᴏᴏᴋ ɢᴏᴏᴅ.',
    'ʏᴇs.',
    'ɴᴏ.',
    'sɪɢɴs ᴘᴏɪɴᴛ ᴛᴏ ʏᴇs.',
    'ʀᴇᴘʟʏ ʜᴀᴢʏ, ᴛʀʏ ᴀɢᴀɪɴ.',
    'ᴀsᴋ ᴀɢᴀɪɴ ʟᴀᴛᴇʀ.',
    'ʙᴇᴛᴛᴇʀ ɴᴏᴛ ᴛᴇʟʟ ʏᴏᴜ ɴᴏᴡ.',
    'ᴄᴀɴɴᴏᴛ ᴘʀᴇᴅɪᴄᴛ ɴᴏᴡ.',
    'ᴄᴏɴᴄᴇɴᴛʀᴀᴛᴇ ᴀɴᴅ ᴀsᴋ ᴀɢᴀɪɴ.',
    "ᴅᴏɴ'ᴛ ᴄᴏᴜɴᴛ ᴏɴ ɪᴛ.",
    'ᴍʏ ʀᴇᴘʟʏ ɪs ɴᴏ.',
    'ᴍʏ sᴏᴜʀᴄᴇs sᴀʏ ɴᴏ.',
    'ᴏᴜᴛʟᴏᴏᴋ ɴᴏᴛ sᴏ ɢᴏᴏᴅ.',
    'ᴠᴇʀʏ ᴅᴏᴜʙᴛғᴜʟ.'
  ]
  const embed = new RichEmbed()
    .setColor('RANDOM')
    .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
    .setDescription('```' + messageList[Math.floor(Math.random() * messageList.length)] + '```')
    .setThumbnail(photo)
    .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
  message.edit(embed)
}

module.exports.help = {
  name: '8ball'
}
