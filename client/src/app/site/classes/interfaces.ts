export interface IGood {
  id?: string
  name: string,
  attachments: [],
  description: string,
  code: number,
  article: string,
  price: number,
  currency: number,
  categoryId: string,
}

export interface ITask {
  sequenceNumber: number,
  title: string,
  description: string,
  status: string,
  date: string
}

export interface ICategory {
  parentId: number | null;
  children: [],
  id: number,
  name: string
}
