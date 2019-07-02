import LiveOrderBoard from '..'
import { IOrder } from '../interfaces'
import { newOrders } from './fixtures'

describe('Live Order Board', () => {
  let liveOrderBoard: LiveOrderBoard = null

  beforeEach(() => {
    liveOrderBoard = new LiveOrderBoard()
  })

  it('should contain an empty array after initialisation', () => {
    expect(liveOrderBoard.getOrders().length).toEqual(0)
  })

  it('should register orders with the correct fields', () => {
    const newOrder = newOrders[0]
    liveOrderBoard.registerOrder(newOrder)
    const registeredOrders = liveOrderBoard.getOrders()
    expect(registeredOrders.length).toEqual(1)
    const registerOrder = registeredOrders[0]
    expect(registerOrder.pricePerKg).toEqual(newOrder.pricePerKg)
    expect(registerOrder.quantity).toEqual(newOrder.quantity)
    expect(registerOrder.type).toEqual(newOrder.type)
    expect(registerOrder.userId).toEqual(newOrder.userId)
  })

  it('should cancel a given order', () => {
    for (const order of newOrders) {
      liveOrderBoard.registerOrder(order)
    }
    let registeredOrders: IOrder[] = liveOrderBoard.getOrders()
    const orderToCancel = registeredOrders[2]
    expect(registeredOrders.length).toEqual(newOrders.length)

    liveOrderBoard.cancelOrder(orderToCancel.userId, orderToCancel.timestamp)
    registeredOrders = liveOrderBoard.getOrders()
    expect(registeredOrders.length).toEqual(newOrders.length - 1)

    const findResult = registeredOrders
      .find((o) => o.userId === orderToCancel.userId && o.timestamp === orderToCancel.timestamp)
    expect(findResult).toEqual(undefined)
  })

  it('should return the correct summary information for BUY orders', () => {
    for (const order of newOrders) {
      liveOrderBoard.registerOrder(order)
    }

    const summary = liveOrderBoard.getSummary()
    expect(summary.buy.length).toEqual(3)
    expect(summary.buy[0].pricePerKg).toEqual(310)
    expect(summary.buy[1].pricePerKg).toEqual(307)
    expect(summary.buy[2].pricePerKg).toEqual(301)
  })

  it('should return the correct summary information for SELL orders', () => {
    for (const order of newOrders) {
      liveOrderBoard.registerOrder(order)
    }

    const summary = liveOrderBoard.getSummary()
    expect(summary.sell.length).toEqual(3)
    expect(summary.sell[0].pricePerKg).toEqual(306)
    expect(summary.sell[1].pricePerKg).toEqual(307)
    expect(summary.sell[2].pricePerKg).toEqual(310)
  })
})
