export interface IVariant {
  _id: string;
  variantName: string;
  variantPrice: number;
}

export interface IProduct {
  _id: string;
  name: string;
  slug: string;
  photos: string[];
  description: string;
  metaKey: string;
  company: string;
  discount: number;
  stockStatus: boolean;
  status: string;
  categoryId: string;
  categoryName: string;
  variants: IVariant[];
  defaultPrice: number;
  createdAt: Date;
  updatedAt: Date;
}
