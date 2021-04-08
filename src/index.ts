import 'dotenv/config'
import { bot, errorLogger, infoLogger, tickers } from "./utils/constants";
import tickerHandler from "./components/tickerHandler";
import winston from 'winston';

if (process.env.NODE_ENV !== 'production') {
    errorLogger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));

  infoLogger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

const loopBot = () => {
    setTimeout(() => {
        tickers.forEach(ticker => {
            tickerHandler(ticker)
        })
        loopBot()
    }, 5000)
}

loopBot()

bot.connect()