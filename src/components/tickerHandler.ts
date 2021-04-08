import axios from "axios"
import { NASDAQ } from "../types/nasdaq"
import { errorLogger, infoLogger } from "../utils/constants"
import discordMessage from "./discordMessage"

const tickerHandler = (ticker: string) => {

  axios.get(`https://query1.finance.yahoo.com/v7/finance/quote?symbols=${ticker}`)
    .then((response) => {
      let data: NASDAQ = response.data

      discordMessage(ticker, data)
    })
    .catch(error => errorLogger.error(error))
}

export default tickerHandler