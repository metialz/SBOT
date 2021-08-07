const {
  Client,
  RichEmbed
} = require('discord.js-selfbot-v11')
const config = require('../../config.json')
const photo = config.photo

module.exports.run = async (bot, message, args) => {
  if (message.author.bot) return
  const haste = args.slice(0).join(' ')
  if (args.length < 1) {
    const embed = new RichEmbed()
      .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
      .addField('ᴀᴠᴀɪʟᴀʙʟᴇ ᴄᴏᴍᴍᴀɴᴅs', '`> ɢᴇɴᴇʀᴀʟ` | ɢᴇɴᴇʀᴀʟ ᴄᴏᴍᴍᴀɴᴅs  \n `> ᴀᴄᴄᴏᴜɴᴛ` | ᴀᴄᴄᴏᴜɴᴛ ᴄᴏᴍᴍᴀɴᴅs \n `> ᴍᴏᴅᴇʀᴀᴛɪᴏɴ` | ᴍᴏᴅᴇʀᴀᴛɪᴏɴ ᴄᴏᴍᴍᴀɴᴅs \n  `> sᴛᴀᴛᴜs` | sᴛᴀᴛᴜs ᴄᴏᴍᴍᴀɴᴅs \n  `> ᴛᴇxᴛ`| ᴛᴇxᴛ ᴄᴏᴍᴍᴀɴᴅs \n  `> ғᴜɴ` | ғᴜɴ ᴄᴏᴍᴍᴀɴᴅs  \n  `> ʜᴇɴᴛᴀɪ-ɴsғᴡ` | ʜᴇɴᴛᴀɪ-ɴsғᴡ ᴄᴏᴍᴍᴀɴᴅs \n `> ɴsғᴡ` | ɴsғᴡ ᴄᴏᴍᴍᴀɴᴅs \n `> ʀᴀɪᴅ` | ʀᴀɪᴅ ᴄᴏᴍᴍᴀɴᴅs ')
      .setColor('RANDOM')
      .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.avatarURL)
      .setThumbnail(photo)
    message.edit(embed)
  } else
  if (haste.toLowerCase() === 'general') {
    const embed = new RichEmbed()
      .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
      .addField('ɢᴇɴᴇʀᴀʟ ᴄᴏᴍᴍᴀɴᴅs', '`> ᴀᴠᴀᴛᴀʀ` | ɢʀᴀʙ ᴜsᴇʀ ᴀᴠᴀᴛᴀʀ  \n `> ʜᴇʟᴘ` | ᴛʜɪs ᴍᴇssᴀɢᴇ \n `> ᴘɪɴɢ` | ᴘᴏɴɢ!! \n  `> sᴇʀᴠᴇʀɪɴғᴏ` | sʜᴏᴡs ɪɴғᴏ ᴏғ sᴇʀᴠᴇʀ \n  `> ᴜᴘᴛɪᴍᴇ`| ᴄʜᴇᴄᴋs ʙᴏᴛs ᴜᴘᴛɪᴍᴇ \n  `> ᴡʜᴏɪs` | sʜᴏᴡs ɪɴғᴏ ᴏғ ᴜsᴇʀ')
      .setColor('RANDOM')
      .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.avatarURL)
      .setThumbnail(photo)
    message.edit(embed)
  } else
  if (haste.toLowerCase() === 'account') {
    const embed = new RichEmbed()
      .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
      .addField('ᴀᴄᴄᴏᴜɴᴛ ᴄᴏᴍᴍᴀɴᴅs', '`> ɢʜᴏsᴛ` | ᴍᴀᴋᴇ ʏᴏᴜ ᴀ ɢʜᴏsᴛ  \n `> ʜǫʙᴀʟᴀɴᴄᴇ` | ᴄʜᴀɴɢᴇ ʜʏᴘᴇsǫᴜᴀᴅ ᴛᴏ ʙᴀʟᴀɴᴄᴇ \n `> ʜǫʙʀᴀᴠᴇʀʏ` | ᴄʜᴀɴɢᴇ ʜʏᴘᴇsǫᴜᴀᴅ ᴛᴏ ʙʀᴀᴠᴇʀʏ \n  `> ʜǫʙʀɪʟʟɪᴀɴᴄᴇ` | ᴄʜᴀɴɢᴇ ʜʏᴘᴇsǫᴜᴀᴅ ᴛᴏ ʙʀɪʟʟɪᴀɴᴄᴇ \n  `> ʟᴇᴀᴠᴇsᴇʀᴠᴇʀs`| ʟᴇᴀᴠᴇ ᴀʟʟ sᴇʀᴠᴇʀs ʏᴏᴜ ɪɴ\n  `> sᴛᴇᴀʟᴘғᴘ` | sᴛᴇᴀʟ @ᴜsᴇʀ ᴘʀᴏғɪʟᴇ ᴘɪᴄᴛᴜʀᴇ \n  `> sᴇᴛᴘғᴘ` | sᴇᴛ <ʟɪɴᴋ> ᴀs ᴘʀᴏғɪʟᴇ ᴘɪᴄᴛᴜʀᴇ')
      .setColor('RANDOM')
      .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.avatarURL)
      .setThumbnail(photo)
    message.edit(embed)
  } else
  if (haste.toLowerCase() === 'moderation') {
    const embed = new RichEmbed()
      .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
      .addField('ᴀᴄᴄᴏᴜɴᴛ ᴄᴏᴍᴍᴀɴᴅs', '`> ʙᴀɴ` | ʙᴀɴ @ᴜsᴇʀ  \n `> ᴋɪᴄᴋ` | ᴋɪᴄᴋ @ᴜsᴇʀ \n `> ɴᴀᴍᴇᴀʟʟ` | ᴄʜᴀɴɢᴇ ᴀʟʟ ᴜsᴇʀs ɴᴀᴍᴇ \n  `> sᴇʀᴠᴇʀɴᴀᴍᴇ` | ᴄʜᴀɴɢᴇ sᴇʀᴠᴇʀɴᴀᴍᴇ')
      .setColor('RANDOM')
      .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.avatarURL)
      .setThumbnail(photo)
    message.edit(embed)
  } else
  if (haste.toLowerCase() === 'status') {
    const embed = new RichEmbed()
      .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
      .addField('sᴛᴀᴛᴜs ᴄᴏᴍᴍᴀɴᴅs', '`> ᴅɴᴅ` | sᴇᴛ sᴛᴀᴛᴜs ᴅɴᴅ  \n `> ɪᴅʟᴇ` | sᴇᴛ sᴛᴀᴛᴜs ɪᴅʟᴇ \n `> ᴏғғʟɪɴᴇ` | sᴇᴛ sᴛᴀᴛᴜs ᴏғғʟɪɴᴇ \n `> ᴏɴʟɪɴᴇ` | sᴇᴛ sᴛᴀᴛᴜs ᴏɴʟɪɴᴇ \n `> ᴘʟᴀʏɪɴɢ` | sᴇᴛ sᴛᴀᴛᴜs ᴘʟᴀʏɪɴɢ <ᴛᴇxᴛ> \n `> ʟɪsᴛᴇɴɪɴɢ` | sᴇᴛ sᴛᴀᴛᴜs ʟɪsᴛᴇɴɪɴɢ <ᴛᴇxᴛ> \n `> sᴛʀᴇᴀᴍɪɴɢ` | sᴇᴛ sᴛᴀᴛᴜs sᴛʀᴇᴀᴍɪɴɢ <ᴛᴇxᴛ> \n `> ᴡᴀᴛᴄʜɪɴɢ` | sᴇᴛ sᴛᴀᴛᴜs ᴡᴀᴛᴄʜɪɴɢ <ᴛᴇxᴛ> \n  `> ʀᴘᴄ` | sᴇᴛ sᴛᴀᴛᴜs ʀᴘᴄ \n `> sᴛᴏᴘ` | sᴛᴏᴘ sᴛᴀᴛᴜs')
      .setColor('RANDOM')
      .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.avatarURL)
      .setThumbnail(photo)
    message.edit(embed)
  } else
  if (haste.toLowerCase() === 'text') {
    const embed = new RichEmbed()
      .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
      .addField('ᴛᴇxᴛ ᴄᴏᴍᴍᴀɴᴅs', '`> ᴄʟᴇᴀʀ` | sᴇɴᴅ ᴇᴍᴘᴛʏ @ᴜsᴇʀ  \n `> ᴅᴀɴᴄᴇ` | ♪┗ ( ･o･) ┓♪ \n `> ᴇᴍʙᴇᴅ` | sᴇɴᴅ ᴇᴍʙᴇᴅ ᴛᴇxᴛ \n  `> ᴇᴍᴏᴊɪғʏ` | ᴡʀɪᴛᴇ ʏᴏᴜʀ ᴛᴇxᴛ ᴡɪᴛʜ ᴇᴍᴏᴊɪ\n  `> ᴍᴏʀsᴇ` | ᴡʀɪᴛᴇ ʏᴏᴜʀ ᴛᴇxᴛ ᴡɪᴛʜ ᴍᴏʀsᴇ ᴄᴏᴅᴇ \n  `> ᴘᴜʀɢᴇ` | ᴅᴇʟᴇᴛᴇ ᴍᴇssᴀɢᴇs \n  `> reverse` | ʀᴇᴠᴇʀsᴇ ʏᴏᴜʀ ᴛᴇxᴛ \n  `> sᴘᴀᴍ` | sᴘᴀᴍ ᴛᴇxᴛ \n  `> ᴛʏᴘɪɴɢ` | ғᴀᴋᴇ ᴛʏᴘɪɴɢ ɪɴ ᴄʜᴀɴɴᴇʟ \n  `> ᴜʀʙᴀɴ` | ᴄʜᴇᴄᴋ ᴡᴏʀᴅ ᴡɪᴛʜ ᴜʀʙᴀɴ ᴅɪᴄᴛ \n  `> ᴢᴀʟɢᴏ` | ᴢᴀʟɢᴏ ᴛᴇxᴛ')
      .setColor('RANDOM')
      .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.avatarURL)
      .setThumbnail(photo)
    message.edit(embed)
  } else
  if (haste.toLowerCase() === 'fun') {
    const embed = new RichEmbed()
      .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
      .addField('ғᴜɴ ᴄᴏᴍᴍᴀɴᴅs', '`> 𝟾ʙᴀʟʟ` | ᴀsᴋ 𝟾ʙᴀʟʟ ᴀ ǫᴜᴇsᴛɪᴏɴ  \n `> ᴀᴡᴏᴏɪғʏ` | ᴀᴡᴏᴏɪғʏ @ᴜsᴇʀ \n `> ʙʟᴜʀᴘɪғʏ` | ʙʟᴜʀᴘɪғʏ @ᴜsᴇʀ \n  `> ᴄᴀᴛғᴀᴄᴛ` | ʀᴀɴᴅᴏᴍ ᴄᴀᴛғᴀᴄᴛ\n  `> ᴄʜᴀɴɢᴇᴍʏᴍɪɴᴅ` | ᴄʜᴀɴɢᴇᴍʏᴍɪɴᴅ <ᴛᴇxᴛ> \n  `> ᴄʟʏᴅᴇ` | ᴄʟʏᴅᴇ <ᴛᴇxᴛ> \n  `> ᴅᴇᴇᴘғʀʏ` | ᴅᴇᴇᴘғʀʏ @ᴜsᴇʀ \n  `> ᴅᴏɢғᴀᴄᴛ` | ʀᴀɴᴅᴏᴍ ᴅᴏɢғᴀᴄᴛ \n  `> ғᴇᴇᴅ` | ғᴇᴇᴅ @ᴜsᴇʀ \n  `> ғʟɪᴘᴄᴏɪɴ` | ғʟɪᴘ ᴄᴏɪɴ :// \n  `> ғᴏxғᴀᴄᴛ` | ʀᴀɴᴅᴏᴍ ғᴏxғᴀᴄᴛ  \n  `> ɢᴀʏ` | ɢᴀʏ @ᴜsᴇʀ \n  `> ʜᴜɢ` | ʜᴜɢ @ᴜsᴇʀ \n  `> ɪᴘʜᴏɴᴇx` | ɪᴘʜᴏɴᴇx @ᴜsᴇʀ \n  `> ᴋᴀɴɴᴀ` | ᴋᴀɴɴᴀ <ᴛᴇxᴛ> \n  `> ᴋɪss` | ᴋɪss @ᴜsᴇʀ \n  `> ᴋᴏᴀʟᴀғᴀᴄᴛ` | ʀᴀɴᴅᴏᴍ ᴋᴏᴀʟᴀ ғᴀᴄᴛ \n  `> ʟᴏʟɪᴄᴇ` | ʟᴏʟɪᴄᴇ @ᴜsᴇʀ \n  `> ʟᴏᴠᴇᴄᴀʟᴄ` | ʟᴏᴠᴇᴄᴀʟᴄ @ᴜsᴇʀ \n `> ᴍᴀɢɪᴋ` | ᴍᴀɢɪᴋ @ᴜsᴇʀ \n `> ᴘᴀɴᴅᴀғᴀᴄᴛ` | ʀᴀɴᴅᴏᴍ ᴘᴀɴᴅᴀғᴀᴄᴛ \n `> ᴘᴀᴛ` | ᴘᴀᴛ @ᴜsᴇʀ \n `> ᴘʜᴄᴏᴍᴍᴇɴᴛ` | ᴘʜᴄᴏᴍᴍᴇɴᴛ <ᴛᴇxᴛ> \n `> sʟᴀᴘ` | sʟᴀᴘ @ᴜsᴇʀ \n `> ᴛʀᴀsʜ` | ᴛʀᴀsʜ @ᴜsᴇʀ \n `> ᴛᴡᴇᴇᴛ` | ᴛᴡᴇᴇᴛ <ᴛᴇxᴛ> \n `> ᴡᴀsᴛᴇᴅ` | ᴡᴀsᴛᴇᴅ @ᴜsᴇʀ \n `> ᴡɪɴᴋ` | ᴡɪɴᴋ @ᴜsᴇʀ')
      .setColor('RANDOM')
      .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.avatarURL)
      .setThumbnail(photo)
    message.edit(embed)
  } else
  if (haste.toLowerCase() === 'nsfw') {
    const embed = new RichEmbed()
      .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
      .addField('ɴsғᴡ ᴄᴏᴍᴍᴀɴᴅs', '`> 𝟺ᴋ` | ɴsғᴡ  \n `> ᴀɴᴀʟ` | ɴsғᴡ \n `> ᴀss` | ɴsғᴡ \n  `> ʙᴏᴏʙs` | ɴsғᴡ \n  `> ɢᴏɴᴡɪʟᴅ` | ɴsғᴡ \n  `> ᴘɢɪғ` | ɴsғᴡ \n  `> ᴘᴜssʏ` | ɴsғᴡ \n  `> ᴛʜɪɢʜ` | ɴsғᴡ')
      .setColor('RANDOM')
      .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.avatarURL)
      .setThumbnail(photo)
    message.edit(embed)
  } else
  if (haste.toLowerCase() === 'hentai-nsfw') {
    const embed = new RichEmbed()
      .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
      .addField('ʜᴇɴᴛᴀɪ-ɴsғᴡ ᴄᴏᴍᴍᴀɴᴅs', '`> ʜ-ᴀɴᴀʟ` | ɴsғᴡ  \n `> ʜ-ʙᴏᴏʙs` | ɴsғᴡ \n `> ʜ-ᴄʟᴀssɪᴄ` | ɴsғᴡ \n  `> ʜ-ғᴜᴛᴜɴᴀʀɪ` | ɴsғᴡ \n  `> ʜ-ʜᴇɴᴛᴀɪ` | ɴsғᴡ \n  `> ʜ-ᴋᴇᴛᴀ` | ɴsғᴡ \n  `> ʜ-ᴘᴜssʏ` | ɴsғᴡ \n  `> ʜ-sᴘᴀɴᴋ` | ɴsғᴡ \n  `> ʜ-ᴛɪᴛs` | ɴsғᴡ \n  `> ʜ-ᴛʀᴀᴘ` | ɴsғᴡ\n  `> ʜ-ʏᴜʀɪ` | ɴsғᴡ')
      .setColor('RANDOM')
      .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.avatarURL)
      .setThumbnail(photo)
    message.edit(embed)
  } else
  if (haste.toLowerCase() === 'raid') {
    const embed = new RichEmbed()
      .setTitle('ᵉˡˡⁱᵒᵗ ˢᵉˡᶠ ᵇᵒᵗ')
      .addField('ʀᴀɪᴅ ᴄᴏᴍᴍᴀɴᴅs', '`> ᴅᴍᴀʟʟ` | ᴅᴍᴀʟʟ <ᴛᴇxᴛ> sᴇɴᴅ ᴅᴍ ᴛᴏ ᴀʟʟ ᴜsᴇʀs ɪɴ ɢᴜɪʟᴅ  \n `> ᴅᴍʀᴏʟᴇ` | ᴅᴍʀᴏʟᴇ @ᴜsᴇʀ sᴇɴᴅ ᴅᴍ ᴛᴏ ᴜsᴇʀs ᴡʜᴏ ʜᴀᴠᴇ @ʀᴏʟᴇ ɪɴ ɢᴜɪʟᴅ \n `> ᴍᴀssʙᴀɴ` | ʙᴀɴ ᴀʟʟ ᴍᴇᴍʙᴇʀs ɪɴ sᴇʀᴠᴇʀ \n  `> ᴍᴀssᴋɪᴄᴋ` | ᴋɪᴄᴋ ᴀʟʟ ᴍᴇᴍʙᴇʀs \n  `> ʀᴇᴍᴏᴠᴇᴄʜᴀɴɴᴇʟs` | ʀᴇᴍᴏᴠᴇ ᴀʟʟ ᴄʜᴀɴɴᴇʟs \n  `> ʀᴇᴍᴏᴠᴇᴇᴍᴏᴊɪs` | ʀᴇᴍᴏᴠᴇ ᴀʟʟ ᴇᴍᴏᴊɪs \n  `> ʀᴇᴍᴏᴠᴇʀᴏʟᴇs` | ʀᴇᴍᴏᴠᴇ ᴀʟ ʀᴏʟᴇs \n  `> ᴛᴏᴋᴇɴғᴜᴄᴋᴇʀ` | ᴛᴏᴋᴇɴғᴜᴄᴋᴇʀ <ᴛᴏᴋᴇɴ> \n  `> ᴛᴏᴋᴇɴɪɴғᴏ` | ᴛᴏᴋᴇɴɪɴғᴏ <ᴛᴏᴋᴇɴ> \n  `> ᴛᴏᴋᴇɴɴᴜᴋᴇ` | ᴛᴏᴋᴇɴɴᴜᴋᴇ <ᴛᴏᴋᴇɴ> \n  `> ᴡɪᴢᴢ` | ғᴜᴄᴋ sᴇʀᴠᴇʀ')
      .setColor('RANDOM')
      .setFooter('『https://discord.gg/mYsaYxtqdG』', message.author.avatarURL)
      .setThumbnail(photo)
    message.edit(embed)
  }
}

module.exports.help = {
  name: 'help'
}
