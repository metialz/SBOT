const {
  Client,
  RichEmbed
} = require('discord.js-selfbot-v11')
const config = require('../../config.json')
const rpc = require('discordrpcgenerator')
const photo = config.photo
const uuid = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (meti) => {
    return (meti ^ Math.random() * 16 >> meti / 4).toString(16)
  })
}

module.exports.run = async (bot, message, args) => {
  if (message.author.bot) return

  if (config.title === "" || config.type === "" || config.application_id === "" || config.details === "" || config.largetext === "" || config.state === "") {
    const embed = new RichEmbed()
      .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
      .setDescription('```ғɪʟʟ ʀᴘᴄ sᴇᴛᴛɪɴɢ ɪɴ ᴛʜᴇ ᴄᴏɴғɪɢ.ᴊs```')
      .setThumbnail(photo)
      .setcolor('RANDOM')
      .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
    message.edit(embed)
  } else {
    rpc.getRpcImage(config.application_id, config.imagerpc).then((smImg) => {
      rpc.getRpcImage(config.application_id, config.imagerpc).then((lgImg) => {
        const rpcSet =
            new rpc.Rpc()
              .setName(config.title)
              .setUrl('https://www.twitch.tv/OGAGAL_risita')
              .setType(config.type)
              .setApplicationId(config.application_id)
              .setDetails(config.details)
              .setAssetsLargeImage(lgImg.id)
              .setAssetsSmallImage(smImg.id)
              .setAssetsLargeText(config.largetext)
              .setAssetsSmallText('https://discord.gg/mYsaYxtqdG')
              .setState(config.state)
              .setStartTimestamp(Date.now()).setParty({
                id: uuid()
              })
        bot.user.setPresence(rpcSet.toDiscord())
        const embed = new RichEmbed()
          .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
          .setDescription('```ʀᴘᴄ : ᴀᴄᴛɪᴠᴇ```')
          .setThumbnail(photo)
          .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.displayAvatarURL)
          .setcolor('RANDOM')
        message.edit(embed)
          .catch(console.error)
      })
    })
  }
}

module.exports.help = {
  name: 'online'
}
