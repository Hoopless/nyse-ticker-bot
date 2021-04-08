const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;
import { Client as DiscordClient } from 'eris'

export const bot = new DiscordClient(process.env.BOT_TOKEN as string)

export const tickers = ['NET', 'GME', 'TSLA', 'AMC'];

export let messages: any = {};

export const errorLogger = createLogger({
    level: 'error',
    format: combine(
        format.timestamp(),
        format.prettyPrint()
    ),
    transports: [
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: 'combined.log' })
    ],
})

export const infoLogger = createLogger({
    level: 'info',
    format: combine(
        format.timestamp(),
        format.prettyPrint()
    ),
    transports: [
        new transports.File({ filename: 'info.log', level: 'info' }),
        new transports.File({ filename: 'combined.log' })
    ],
})


