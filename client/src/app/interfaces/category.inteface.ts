export interface ICategory {
  parentId: number | null
  children: ICategory[]
  id: number
  name: string
}
