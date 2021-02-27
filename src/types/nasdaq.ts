
/**
 * Interface of the NASDAQ Api response.
 * API Endpoint: 
 */
export interface NASDAQ {
    symbol: string,
    companyName: string,
    stockType: string,
    exchange: string,
    isNasdaqListed: boolean,
    isNasdaq100: boolean,
    isHeld: boolean,
    primaryData: NASDAQPrimaryData
    secondaryData: NASDAQSecondaryData|null,
    keyStats: any,
    marketStatus: string,
    assetClass: string,
    tradingHeld: null,
    complianceStatus: null,
}

interface NASDAQPrimaryData {
    lastSalePrice: string,
    netChange: string,
    percentageChange: string,
    deltaIndicator: string,
    lastTradeTimestamp: string,
    isRealTime: boolean
}

interface NASDAQSecondaryData {
    lastSalePrice: string,
    netChange: string,
    percentageChange: string,
    deltaIndicator: string,
    lastTradeTimestamp: string,
    isRealTime: boolean
}