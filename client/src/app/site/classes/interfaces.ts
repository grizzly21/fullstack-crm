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

export interface ILeavings {
  product: {
    id: number;
    name: string;
    description: string;
    code: number;
    article: string;
    price: number;
    currency: number;
    addedBy: {
      id: string;
      email: string;
      displayName: string;
    };
    category: {
      id: number;
      name: string;
    };
    attachments: [{
      id: string;
      name: string;
      extension: string;
    }];
  };
  lastPostingDate: string;
  cost: {
    value: number;
    currency: number;
  };
  inStockCount: number;
}
