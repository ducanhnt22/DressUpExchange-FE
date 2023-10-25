import { IProductCart } from "@/types/typing";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ICart {
  cart: IProductCart[];
  addToCart: (product: IProductCart) => void;
  resetCard: () => void;
  removeFromCart: (productId: number) => void;
}
const useCartStore = create<ICart>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => ({ cart: [...state.cart, product] })),
      resetCard: () => set(() => ({ cart: [] })),
      removeFromCart: (productId: number) =>
        set((state) => ({
          cart: state.cart.filter((product) => product.productId !== productId),
        })),
    }),

    { name: "cart" }
  )
);
export default useCartStore;
