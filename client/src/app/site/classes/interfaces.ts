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
  assignedToId?: string | { id: string; email: string; displayName: string };
  title: string;
  description: string;
  status: number | Record<string, any>;
  targetDate: string;
}

export interface ICategory {
  parentId: number | null;
  children: [];
  id: number;
  name: string;
}
