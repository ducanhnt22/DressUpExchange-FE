import Link from "next/link";
import {
  Pagination,
  ProductCard,
  Slide,
  ImageCarousel,
  Blog,
} from "./product/components";
import { IProductList } from "@/types";
import { getAllProduct } from "@/lib";

type SearchParamsProps = {
  searchParams: { page: string };
};

export default async function Product({ searchParams }: SearchParamsProps) {
  const listProduct: IProductList = await getAllProduct();

  return (
    <div className="h-full bg-[#F5DCBD] pb-20">
      <Slide />
      <div className="bg-[#825942] p-4 text-white flex items-center justify-evenly mt-5">
        <Link href={"/product?category=costume"}>
          <h3 className="hover:text-amber-200 transition-colors duration-300">
            Trang phục
          </h3>
        </Link>
        <Link href={"/product?category=wig"}>
          <h3 className="hover:text-amber-200 transition-colors duration-300">
            Tóc
          </h3>
        </Link>
        <Link href={"/product?category=others"}>
          <h3 className="hover:text-amber-200 transition-colors duration-300">
            Phụ kiện khác
          </h3>
        </Link>
      </div>

      <div className="flex flex-col mt-4 justify-center items-center">
        <h1 className="text-center text-stone-500 text-sm">
          FEATURED PRODUCTS
        </h1>
        <h1 className="font-bold text-4xl">New Arrival</h1>
      </div>

      <div className="grid grid-cols-4 w-[90%] mx-auto gap-6 mt-5 mb-5">
        {listProduct?.items
          .reverse()
          .slice(0, 8)
          .map((product) => (
            <ProductCard
              key={product.productId}
              name={product.name}
              price={product.price}
              productId={product.productId}
              thumbnail={product.thumbnail}
            />
          ))}
      </div>

      <div className="flex flex-col mt-4 justify-center items-center">
        <h1 className="text-center text-stone-500 text-sm">
          COSPLAYERS FROM OUR CUSTOMERS
        </h1>
        <h1 className="font-bold text-4xl mb-5">Cosplayer Show</h1>
        <ImageCarousel />
      </div>

      <div className="flex flex-col mt-4 justify-center items-center">
        <h1 className="text-center text-stone-500 text-sm">
          FAVOURITE FROM EVERY CATEGORY
        </h1>
        <h1 className="font-bold text-4xl">Trending</h1>
      </div>

      <div className="grid grid-cols-4 w-[90%] mx-auto gap-6 mt-5 mb-5">
        {listProduct?.items
          .sort(() => 0.5 - Math.random())
          .slice(0, 4)
          .map((product) => (
            <ProductCard
              key={product.productId}
              name={product.name}
              price={product.price}
              productId={product.productId}
              thumbnail={product.thumbnail}
            />
          ))}
      </div>

      <div className="flex flex-col mt-4 justify-center items-center">
        <h1 className="text-center text-stone-500 text-sm">OUR FRESH NEWS</h1>
        <h1 className="font-bold text-4xl mb-5">New Blog Posts</h1>
      </div>
      <Blog />
      {/* <Pagination totalItem={50} currentPage={+searchParams.page} renderPageLink={(page) => `/product?page=${page}`} /> */}
    </div>
  );
}
