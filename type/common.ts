export type loginFormData = {
  email: string;
  password: string;
};

export type registerFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export interface CheckoutFormValues {
  name: string;
  phone: string;
  email: string;
  companyName: string;
  division: string;
  district: string;
  upazilla: string;
  roadNo: string;
  houseNo: string;
  paymentMethod: string;
}

export interface IVariant {
  _id: string;
  name: string;
  price: number;
}
export interface DecodedToken {
  id: string;
  role: string;
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
export interface ICategory {
  _id: string;
  name: string;
  slug: string;
  subCategory: string[];
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

// Define types for the product query parameters

// Define types for order list items
export interface OrderListItem {
  title: string;
  value: string;
  order: "asc" | "desc";
}

// Define types for the product query parameters
export interface ProductQueryParams {
  searchValue?: string | null;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  categoryName?: string;
  subCategory?: string | null;
  itemsPerPage?: number;
  currentPage?: number;
}

// Define types for order list items
export interface OrderListItem {
  title: string;
  value: string;
  order: "asc" | "desc";
}
