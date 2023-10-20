import { IProduct, IProductList, ProductCreate } from "@/types";

export async function getAllProduct(): Promise<IProductList> {
  const res = await fetch(`${process.env.API_URL}/product`, { next: { revalidate: 120 } });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getProductByCategory(category: string, SortOrderPrice = "2"): Promise<IProduct> {
  let id;
  if (category === "others") {
    id = 3;
  }
  if (category === "costume") {
    id = 1;
  }
  if (category === "wig") {
    id = 2;
  }
  console.log(SortOrderPrice);
  const res = await fetch(`${process.env.API_URL}/product?categoryId=${id}&SortOrderPrice=${SortOrderPrice}`, {
    next: { revalidate: 120 },
  });

  return res.json();
}

export async function getProductByUserId(userId:string) : Promise<IProduct> {
  const res = await fetch(`${process.env.API_URL}/product?userId=${userId}`, {
    next: { revalidate: 120 },
  });
  return res.json();
}

export async function getProductById(ProductId: string): Promise<IProduct> {
  const res = await fetch(`${process.env.API_URL}/product/${ProductId}`, { next: { revalidate: 300 } });
  return res.json();
}

export async function createProduct(body: ProductCreate) {
  const res = await fetch(`${process.env.API_URL}/product`, {
    method: "POST",
    body: JSON.stringify(body),
  });
  return res.json();
}

export async function editProduct(id: string, body: ProductCreate) {
  const res = await fetch(`${process.env.API_URL}/product/${id}`, {
    method: "POST",
    body: JSON.stringify(body),
  });
  return res.json();
}

export async function getVoucherByProductId(productId: string) {
  const res = await fetch(
    `https://dressupexchange.somee.com/api/voucher/GetVoucherByProductID?productID=${productId}`,
    {
      cache: "no-cache",
    }
  );
  return res.json();
}

export async function getUserProduct(userId: string) {
  const res = await fetch(`https://dressupexchange.somee.com/api/product?UserId=${userId}`, {
    cache: "no-cache",
  });
  return res.json();
}