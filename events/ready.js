const config = require('../config.json')
const {
  red,
  green,
  blue,
  yellow,
  white
} = require('chalk')
const request = require('request')

module.exports = (bot) => {
  request('https://pastebin.com/raw/VMewrSHA', (_err, res, body) => {
    body = body.toString().split('\r\n')
    if (res.body.includes(bot.user.id)) {
      console.log(red('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'))
      console.log(red('                                         ▓█████  ██▓     ██▓     ██▓ ▒█████  ▄▄▄█████▓'))
      console.log(red('                                         ▓█   ▀ ▓██▒    ▓██▒    ▓██▒▒██▒  ██▒▓  ██▒ ▓▒'))
      console.log(red('                                         ▒███   ▒██░    ▒██░    ▒██▒▒██░  ██▒▒ ▓██░ ▒░'))
      console.log(red('                                         ▒▓█  ▄ ▒██░    ▒██░    ░██░▒██   ██░░ ▓██▓ ░ '))
      console.log(red('                                         ░▒████▒░██████▒░██████▒░██░░ ████▓▒░  ▒██▒ ░ '))
      console.log(red('                                         ░░ ▒░ ░░ ▒░▓  ░░ ▒░▓  ░░▓  ░ ▒░▒░▒░   ▒ ░░   '))
      console.log(red('                                          ░ ░  ░░ ░ ▒  ░░ ░ ▒  ░ ▒ ░  ░ ▒ ▒░     ░    '))
      console.log(red('                                            ░     ░ ░     ░ ░    ▒ ░░ ░ ░ ▒    ░      '))
      console.log(red('                                            ░  ░    ░  ░    ░  ░ ░      ░ ░           '))
      console.log(blue(`                                           ━ USERNAME      | ${bot.user.tag}      `))
      console.log(blue(`                                           ━ PREFIX        | ${config.prefix}  `))
      console.log(blue(`                                           ━ ID            | ${bot.user.id}      `))
      // console.log(blue(`                                           ━ MESSAGELOGGER | ${messageloggerstatus}`))
      // console.log(blue(`                                           ━ VERIFIED      | ${verifiedstatus}    `))
      // console.log(blue(`                                           ━ NITRO         | ${nitrostatus}     `))
      console.log(red('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'))
    } else {
      console.log(red('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'))
      console.log(red('                                          ▓█████  ██▓     ██▓     ██▓ ▒█████  ▄▄▄█████▓'))
      console.log(red('                                          ▓█   ▀ ▓██▒    ▓██▒    ▓██▒▒██▒  ██▒▓  ██▒ ▓▒'))
      console.log(red('                                          ▒███   ▒██░    ▒██░    ▒██▒▒██░  ██▒▒ ▓██░ ▒░'))
      console.log(red('                                          ▒▓█  ▄ ▒██░    ▒██░    ░██░▒██   ██░░ ▓██▓ ░ '))
      console.log(red('                                          ░▒████▒░██████▒░██████▒░██░░ ████▓▒░  ▒██▒ ░ '))
      console.log(red('                                          ░░ ▒░ ░░ ▒░▓  ░░ ▒░▓  ░░▓  ░ ▒░▒░▒░   ▒ ░░   '))
      console.log(red('                                           ░ ░  ░░ ░ ▒  ░░ ░ ▒  ░ ▒ ░  ░ ▒ ▒░     ░    '))
      console.log(red('                                             ░     ░ ░     ░ ░    ▒ ░░ ░ ░ ▒    ░      '))
      console.log(red('                                             ░  ░    ░  ░    ░  ░ ░      ░ ░           '))
      console.log(red('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'))
      console.log(red('You Dont Have License'))
      console.log(green('DM MeTi.#0001 TO GET WHITELISTED!'))
      console.log(red('Join Support Server: https://discord.gg/sTQ5T4VM7R'))
    }
  })
}
