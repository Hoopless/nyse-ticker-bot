import { NASDAQ } from "../types/nasdaq"
import { bot, errorLogger } from "../utils/constants"
import { readFromFile, writeToFile } from "./MessageDataHander";

const discordMessage = (ticker: string, response: NASDAQ,) => {

  let currentTicker = response.quoteResponse.result[0];
  let price;
  let percentage;

  switch (currentTicker.marketState) {
    case "PRE":
      price = currentTicker.preMarketPrice
      percentage = currentTicker.preMarketChangePercent
      break;
    case "POST":
      price = currentTicker.postMarketPrice
      percentage = currentTicker.postMarketChangePercent
      break;
    case "CLOSED":
      price = currentTicker.postMarketPrice
      percentage = currentTicker.postMarketChangePercent
      break;
    default:
      price = currentTicker.regularMarketPrice
      percentage = currentTicker.regularMarketChangePercent
      break;

  }

  if (!percentage || !price) {
    return;
  }

  let discordEmbedContent = {
    embed: {
      title: `STOCK ${ticker}`,
      description: `Information regarding the ticker ${ticker}. \n Ticker information is checked every 5 seconds`,
      color: percentage > 0 ? 3066993 : 15158332,
      fields: [
        { name: 'Market Status', value: currentTicker.marketState, inline: true },
        { name: 'Current Price', value: new Intl.NumberFormat('en-US', { style: 'currency', 'currency': 'USD' }).format(price), inline: true },
        { name: 'percentage', value: new Intl.NumberFormat('nl-NL', { style: 'percent', minimumFractionDigits: 2 }).format(percentage / 100), inline: true },
      ]
    }
  }

  const result = readFromFile(ticker);

  if (! result) {


    bot.createMessage(process.env.DISCORD_CHANNEL_ID as string, discordEmbedContent)
      .then((message) => {

        writeToFile(ticker, message.id)
      })
      .catch(error => errorLogger.error(error))

    return
  }

  bot.editMessage(process.env.DISCORD_CHANNEL_ID as string, result, discordEmbedContent)
    .catch(error => {
      errorLogger.error(error)

      if (error.message === 'Unknown Message') {
        writeToFile(ticker, false);
        errorLogger.error(`Someone deleted the message ${error.message}`)
      }

    })

}

export default discordMessage