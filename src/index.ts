import { IOrder, ISummary, ISummaryByType } from 'interfaces'

export default class LiveOrderBoard {
  private orders: IOrder[] = []

  /**
   * Returns the list of the orders registered on the board
   */
  public getOrders (): IOrder[] {
    return this.orders.map((order) => ({ ...order }))
  }

  /**
   * Registers a new order on the board
   * @param order The order to be registered
   */
  public registerOrder (order: IOrder) {
    this.orders.push({ ...order, timestamp: Date.now() })
  }

  /**
   * Cancels an order on the board. This function assumes the the orders are
   * keyed by userId and timestamp.
   * @param userId The userId of the order to be cancelled
   * @param timestamp The timestamp of the order to be cancelled
   */
  public cancelOrder (userId: string, timestamp: number) {
    this.orders = this.orders.filter((o) => !(o.userId === userId && o.timestamp === timestamp))
  }

  /**
   * Returns the Live Order Board summary
   */
  public getSummary (): ISummaryByType {
    const buyOrders = this.orders.filter((o) => o.type === 'BUY')
    const sellOrders = this.orders.filter((o) => o.type === 'SELL')

    return {
      buy: this.getSummaryForOrders(buyOrders).sort((a, b) => {
        if (a.pricePerKg < b.pricePerKg) {
          return 1
        }
        if (a.pricePerKg > b.pricePerKg) {
          return -1
        }
        return 0
      }),
      sell: this.getSummaryForOrders(sellOrders).sort((a, b) => {
        if (a.pricePerKg < b.pricePerKg) {
          return -1
        }
        if (a.pricePerKg > b.pricePerKg) {
          return 1
        }
        return 0
      })
    }
  }

  /**
   * Returs a summary of orders in a given array
   * @param orders The orders to summarise
   */
  private getSummaryForOrders (orders: IOrder[]): ISummary[] {
    // key = pricePerKg, value = aggregated quantity at the key price
    const summaryMap: Map<number, number> = new Map()

    for (const order of orders) {
      const aggregatedQuantity = summaryMap.get(order.pricePerKg) || 0
      summaryMap.set(order.pricePerKg, aggregatedQuantity + order.quantity)
    }

    return Array.from(summaryMap.entries()).map((s) => ({ pricePerKg: s[0], aggregatedQuantity: s[1] }))
  }
}
