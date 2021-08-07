const {
  Client,
  RichEmbed
} = require('discord.js-selfbot-v11')
const config = require('../../config.json')
const photo = config.photo
const urban = require('relevant-urban')
module.exports.run = async (bot, message, args) => {
  try {
    const search = await urban(args.join(' '))

    const embed = new RichEmbed()
      .setColor('RANDOM')
      .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
      .setDescription('```' + `${search.word}\n ᴅᴇғɪɴɪᴛɪᴏɴ: ${search.definition}\n \n${search.example}` + '```')
      .setThumbnail(photo)
      .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
    message.edit(embed)
  } catch (err) {
    const embed = new RichEmbed()
      .setColor('RANDOM')
      .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
      .setDescription('```' + 'ɴᴏ ǫᴜᴇʀʏ ғᴏʀ ᴛʜɪs ᴡᴏʀᴅ' + '```')
      .setThumbnail(photo)
      .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
    message.edit(embed)
  }
}

module.exports.help = {
  name: 'urban'
}
