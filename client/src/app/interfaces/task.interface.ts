export interface ITask {
  id: number
  assignedToId?: string
  title: string
  description: string
  status: {
    status: number
    title: string
  }
  targetDate: Date
}
