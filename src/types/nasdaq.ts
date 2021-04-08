
/**
 * Interface of the NASDAQ Api response.
 * API Endpoint: 
 */
export interface NASDAQ {
    quoteResponse: quoteResponse
}

interface quoteResponse {
    result: Array<resultItem>,
    error: null|boolean
}

interface resultItem {
    language: string,
    region: string,
    quoteType: string,
    deltaIndquoteSourceNameicator: string,
    triggerable: boolean,
    currency: string,
    marketState: string,
    exchange: string,
    shortName: string,
    longName: string,
    messageBoardId: string,
    exchangeTimezoneName: string,
    exchangeTimezoneShortName: string,
    gmtOffSetMilliseconds: number,
    market: string,
    esgPopulated: boolean,
    firstTradeDateMilliseconds: number,
    priceHint: number,
    tradeable: boolean,
    preMarketPrice: undefined|number,
    preMarketChangePercent: undefined|number,
    postMarketChangePercent: undefined|number,
    postMarketTime: undefined|number,
    postMarketPrice: undefined|number,
    postMarketChange: undefined|number,
    regularMarketChange: number,
    regularMarketChangePercent: number,
    regularMarketTime: number,
    regularMarketPrice: number,
    regularMarketDayHigh: number,
    regularMarketDayRange: string,
    regularMarketDayLow: number,
    regularMarketVolume: number,
    regularMarketPreviousClose: number,
    bid: number,
    ask: number,
    bidSize: number,
    askSize: number,
    fullExchangeName: string,
    financialCurrency: string,
    regularMarketOpen: number,
    averageDailyVolume3Month: number
    averageDailyVolume10Day: number
    fiftyTwoWeekLowChange: number
    fiftyTwoWeekLowChangePercent: number,
    fiftyTwoWeekRange: string,
    fiftyTwoWeekHighChange: number,
    fiftyTwoWeekHighChangePercent: number,
    fiftyTwoWeekLow: number,
    fiftyTwoWeekHigh: number,
    dividendDate: number,
    earningsTimestamp: number,
    earningsTimestampStart: number,
    earningsTimestampEnd: number,
    trailingAnnualDividendRate: number,
    trailingAnnualDividendYield: number,
    epsTrailingTwelveMonths: number,
    epsForward: number,
    epsCurrentYear: number,
    priceEpsCurrentYear: number,
    sharesOutstanding: number,
    bookValue: number,
    fiftyDayAverage: number,
    fiftyDayAverageChange: number,
    fiftyDayAverageChangePercent: number,
    twoHundredDayAverage: number,
    twoHundredDayAverageChange: number,
    twoHundredDayAverageChangePercent: number,
    marketCap: number,
    forwardPE: number,
    priceToBook: number,
    sourceInterval: number,
    exchangeDataDelayedBy: number,
    averageAnalystRating: string,
    displayName: string,
    symbol: string, 
}