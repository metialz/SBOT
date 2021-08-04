const { prefix } = require('../config.json')
const request = require('request')
const {
  red,
  green,
  blue,
  yellow,
  white
} = require('chalk')
module.exports = (bot, message) => {
  if (message.author.bot) return

  if (message.content.indexOf(prefix) !== 0) return

  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()

  const cmd = bot.commands.get(command)
  if (!cmd) return
  request('https://pastebin.com/raw/VMewrSHA', (_err, res, body) => {
    body = body.toString().split('\r\n')
    if (!res.body.includes(bot.user.id)) {
      message.delete()
      console.log(red('Dont TRY u Dont Have a LICENSE'))
      return
    }

    cmd.run(bot, message, args, command)
  })
}
