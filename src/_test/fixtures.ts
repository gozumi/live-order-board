import { IOrder } from '../interfaces'

export const newOrders: IOrder[] = [
  {
    pricePerKg: 306,
    quantity: 3.5,
    type: 'SELL',
    userId: 'user1'
  },
  {
    pricePerKg: 301,
    quantity: 3.5,
    type: 'BUY',
    userId: 'user2'
  },
  {
    pricePerKg: 310,
    quantity: 1.2,
    type: 'SELL',
    userId: 'user3'
  },
  {
    pricePerKg: 310,
    quantity: 1.2,
    type: 'BUY',
    userId: 'user4'
  },
  {
    pricePerKg: 307,
    quantity: 1.5,
    type: 'SELL',
    userId: 'user5'
  },
  {
    pricePerKg: 307,
    quantity: 1.5,
    type: 'BUY',
    userId: 'user6'
  },
  {
    pricePerKg: 306,
    quantity: 2.0,
    type: 'SELL',
    userId: 'user7'
  },
  {
    pricePerKg: 301,
    quantity: 2.0,
    type: 'BUY',
    userId: 'user8'
  }
]
