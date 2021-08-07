const {
  Client,
  RichEmbed
} = require('discord.js-selfbot-v11')
const { readSync } = require('fs')
const config = require('../../config.json')
const photo = config.photo
module.exports.run = async (bot, message, args) => {
  const mapping = {
    ' ': ' ',
    0: ':zero:',
    1: ':one:',
    2: ':two:',
    3: ':three:',
    4: ':four:',
    5: ':five:',
    6: ':six:',
    7: ':seven:',
    8: ':eight:',
    9: ':nine:',
    '!': ':grey_exclamation:',
    '?': ':grey_question:',
    '#': ':hash:',
    '*': ':asterisk:'
  }

  'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`
  })

  if (args.length < 1) {
    const embed = new RichEmbed()
      .setColor('RANDOM')
      .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
      .setDescription('```ᴇɴᴛᴇʀ ᴛᴇxᴛ ᴛᴏ ᴇᴍᴏᴊɪғʏ!```')
      .setThumbnail(photo)
      .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
    message.edit(embed)
    return
  }

  const embed = new RichEmbed()
    .setColor('RANDOM')
    .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
    .setDescription(
      args.join(' ')
        .split('')
        .map(c => mapping[c] || c)
        .join('')
    )
    .setThumbnail(photo)
    .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
  message.edit(embed)
}

module.exports.help = {
  name: 'emojify'
}
