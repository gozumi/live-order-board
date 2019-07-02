import { IOrder, ISummaryByType, ISummary } from 'interfaces'

declare class LiveOrderBoard {
  getOrders(): IOrder
  registerOrder(order: IOrder): void
  cancelOrder (userId: string, timestamp: number): void
  getSummary (): ISummaryByType
  getSummaryForOrders (orders: IOrder[]): ISummary[]
}

export { IOrder, ISummaryByType, ISummary }
