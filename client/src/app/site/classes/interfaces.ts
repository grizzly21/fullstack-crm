export interface IGood {
  id: string
  name: string,
  imageUrl: string,
  description: string,
  code: number,
  article: string,
  price: number,
  category: string,
}

export interface ITask{
  sequenceNumber: number,
  title: string,
  description: string,
  status: string,
  date: string
}
