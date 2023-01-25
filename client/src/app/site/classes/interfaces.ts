export interface IGood {
  id?: string;
  name: string;
  attachments: [];
  description: string;
  code: number;
  article: string;
  price: number;
  currency: number;
  categoryId: string;
}

export interface ITask {
  id: number;
  assignedToId?: string | { id: string; email: string; displayName: string };
  title: string;
  description: string;
  status: {
    status: number,
    title: string
  }
  targetDate: string;
}

export interface ICategory {
  parentId: number | null;
  children: [];
  id: number;
  name: string;
}
