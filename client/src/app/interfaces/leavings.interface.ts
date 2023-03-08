import { ICategory } from './category.inteface'
import { IUserInfo } from './user-info.interface'

export interface ILeavings {
  product: {
    id: number
    name: string
    description: string
    code: number
    article: string
    price: number
    currency: number
    addedBy: IUserInfo
    category: ICategory
    attachments: [
      {
        id: string
        name: string
        extension: string
      }
    ]
  }
  lastPostingDate: Date
  cost: {
    value: number
    currency: number
  }
  inStockCount: number
}
