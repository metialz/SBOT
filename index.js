// #region  package
const {
  Client,
  RichEmbed
} = require('discord.js')
const bot = new Client()
const config = require('./config.json')
const fs = require('fs')
const Enmap = require('enmap')

bot.config = config
bot.commands = new Enmap()

console.clear()
fs.readdir('./events/', (err, files) => {
  if (err) return console.error
  files.forEach((file) => {
    if (!file.endsWith('.js')) return
    const evt = require(`./events/${file}`)
    const evtName = file.split('.')[0]
    bot.on(evtName, evt.bind(null, bot))
  })
})

fs.readdir('./commands/fun', async (_err, files) => {
  files.forEach((file) => {
    if (!file.endsWith('.js')) return
    const props = require(`./commands/fun/${file}`)
    const cmdName = file.split('.')[0]
    bot.commands.set(cmdName, props)
  })
})

fs.readdir('./commands/general', async (_err, files) => {
  files.forEach((file) => {
    if (!file.endsWith('.js')) return
    const props = require(`./commands/general/${file}`)
    const cmdName = file.split('.')[0]
    bot.commands.set(cmdName, props)
  })
})

fs.readdir('./commands/raid', async (_err, files) => {
  files.forEach((file) => {
    if (!file.endsWith('.js')) return
    const props = require(`./commands/raid/${file}`)
    const cmdName = file.split('.')[0]
    bot.commands.set(cmdName, props)
  })
})

fs.readdir('./commands/nsfw', async (_err, files) => {
  files.forEach((file) => {
    if (!file.endsWith('.js')) return
    const props = require(`./commands/nsfw/${file}`)
    const cmdName = file.split('.')[0]
    bot.commands.set(cmdName, props)
  })
})

fs.readdir('./commands/account', async (_err, files) => {
  files.forEach((file) => {
    if (!file.endsWith('.js')) return
    const props = require(`./commands/account/${file}`)
    const cmdName = file.split('.')[0]
    bot.commands.set(cmdName, props)
  })
})

fs.readdir('./commands/text', async (_err, files) => {
  files.forEach((file) => {
    if (!file.endsWith('.js')) return
    const props = require(`./commands/text/${file}`)
    const cmdName = file.split('.')[0]
    bot.commands.set(cmdName, props)
  })
})

fs.readdir('./commands/status', async (_err, files) => {
  files.forEach((file) => {
    if (!file.endsWith('.js')) return
    const props = require(`./commands/status/${file}`)
    const cmdName = file.split('.')[0]
    bot.commands.set(cmdName, props)
  })
})

fs.readdir('./commands/mod', async (_err, files) => {
  files.forEach((file) => {
    if (!file.endsWith('.js')) return
    const props = require(`./commands/mod/${file}`)
    const cmdName = file.split('.')[0]
    bot.commands.set(cmdName, props)
  })
})

fs.readdir('./commands/hentai-nsfw', async (_err, files) => {
  files.forEach((file) => {
    if (!file.endsWith('.js')) return
    const props = require(`./commands/hentai-nsfw/${file}`)
    const cmdName = file.split('.')[0]
    bot.commands.set(cmdName, props)
  })
})

process.on('unhandledRejection', (error) => {
  console.error('Unhandled promise rejection:', error)
})

bot.login(config.token)
