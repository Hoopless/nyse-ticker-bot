import 'dotenv/config'
import { bot, tickers } from "./utils/constants";
import tickerHandler from "./components/tickerHandler";

const loopBot = () => {
    setTimeout(() => {
        tickers.forEach(ticker => {
            tickerHandler(ticker)
        })
        loopBot()
    }, 2000)
}

loopBot()

bot.connect()