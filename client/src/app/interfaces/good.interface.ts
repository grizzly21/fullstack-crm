export interface IGood {
  id?: string
  name: string
  attachments: [
    {
      id: string
      name: string
      extension: string
    }
  ]
  description: string
  code: number
  article: string
  price: number
  currency: number
  categoryId: string
}
