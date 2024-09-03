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
  categoryId: string;
  categoryName: string;
  subCategory: string;
  variants: IVariant[];
  defaultPrice: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Division {
  division: string;
  divisionbn: string;
  coordinates: string;
}

export interface District {
  district: string;
  coordinates: string;
  upazilla: string[];
}
