export interface IOrder {
  timestamp?: number
  readonly userId: string
  readonly quantity: number
  readonly pricePerKg: number
  readonly type: 'BUY' | 'SELL'
}

export interface ISummary {
  readonly pricePerKg: number
  readonly aggregatedQuantity: number
}

export interface ISummaryByType {
  buy: ISummary[]
  sell: ISummary[]
}
