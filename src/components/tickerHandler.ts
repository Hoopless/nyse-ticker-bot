import axios from "axios"
import { NASDAQ } from "../types/nasdaq"

const tickerHandler = (ticker: string) => {
  axios.get(`https://api.nasdaq.com/api/quote/${ticker}/info?assetclass=stocks`)
    .then( (response) => {
      let data: NASDAQ = response.data.data

      // ToDo: JSTLWK-8 - tickers tonen in Discord
    })
}

export default tickerHandler