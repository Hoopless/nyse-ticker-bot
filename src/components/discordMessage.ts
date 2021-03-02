import { stringify } from "querystring"
import { NASDAQ } from "../types/nasdaq"
import { bot, messages } from "../utils/constants"

const discordMessage = (ticker: string, response: NASDAQ,) => {

  let discordEmbedContent = {
    embed: {
      title: `STOCK ${ticker}`,
      description: `Information regarding the ticker ${ticker}. \n Ticker information is checked every 5 seconds`,
      color: response.primaryData.deltaIndicator == 'up' ? 3066993 : 15158332,
      fields: [
        { name: 'Market Status', value: response.marketStatus, inline: true },
        { name: 'Current Price', value: response.primaryData.lastSalePrice, inline: true },
        { name: 'percentage', value: response.primaryData.percentageChange, inline: true },
      ]
    }
  }

  if (!messages[ticker]) {
    bot.createMessage(process.env.DISCORD_CHANNEL_ID as string, discordEmbedContent).then((message) => {
      messages[ticker] = message.id
    }) 
  } else {
    bot.editMessage(process.env.DISCORD_CHANNEL_ID as string, messages[ticker], discordEmbedContent)
  }



  
}

export default discordMessage