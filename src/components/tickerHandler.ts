import axios from "axios"
import { NASDAQ } from "../types/nasdaq"
import { errorLogger, infoLogger } from "../utils/constants"
import discordMessage from "./discordMessage"

const tickerHandler = (ticker: string) => {

  axios.get(`https://api.nasdaq.com/api/quote/${ticker}/info?assetclass=stocks`)
    .then((response) => {
      let data: NASDAQ = response.data.data

      discordMessage(ticker, data)
    })
    .catch(error => errorLogger.error(error))
}

export default tickerHandler