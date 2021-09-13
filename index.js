import { Telegraf } from 'telegraf'
import { config } from 'dotenv'
import { createReadStream } from 'fs'
import { media } from './media.js'

// * Initialize environment variable
config()

// * Bot instance
const bot = new Telegraf(process.env.BOT_TOKEN)

// * Help command
bot.help((ctx) => ctx.reply('Send me a sticker'))

// * Avaiable commands
bot.command('vaffanculo', (ctx) => {
    ctx.replyWithVoice({
        source: createReadStream(media.audio.vaffanculo_dai),
        
    })
})
bot.command('dado', (ctx) => ctx.replyWithDice())
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
