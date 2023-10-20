export interface IProduct {
  userId: number;
  productId: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  size: string;
  thumbnail: string;
  images: [string];
}

export type ProductCreate = Omit<IProduct, "userId" | "productId"> & { categoryId: number };

export interface IProductList {
  count: number;
  items: IProduct[];
}

export interface IOrderItem {
  productId: number;
  userSavedVoucherId: number;
  price: number;
  quantity: number;
}

export interface IProductCart {
  productId: number;
  thumbnail: string;
  name: string;
  quantity: number;
  price: number;
  size: string;
  buyingQuantity: number;
  voucherId: number;
  laudryId: number;
  priceWithVoucher: number;
}

export interface IVoucher {
  total: number;
  vouchers: [
    { voucherId: number; voucherName: string; voucherCode: string; discountAmount: number; expireDate: string }
  ];
}
