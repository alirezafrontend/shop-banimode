import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      discountCode: "",
      discountPercentage: 0,
      addToCart: (product) =>
        set((state) => {
          const existingProduct = state.cart.find(
            (item) => item.id === product.id
          );
          if (existingProduct) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }),

      plus: (productId) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        })),

      minus: (productId) =>
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.id === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0),
        })),

      removeProduct: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),

      getTotalPrice: () => {
        const total = get().cart.reduce(
          (total, item) =>
            total +
            item.quantity * (item.price - (item.price * item.discount) / 100),
          0
        );
        return total;
      },

      getDiscountedPrice: () => {
        const totalPrice = get().getTotalPrice();
        const discount = get().discountPercentage;
        return totalPrice - (totalPrice * discount) / 100;
      },

      applyDiscountCode: (code) => {
        const trimmedCode = code.trim().toLowerCase();
        let discount = 0;

        if (trimmedCode === "code10") {
          discount = 10;
        } else if (trimmedCode === "code20") {
          discount = 20;
        } else {
          return alert("❌ کد تخفیف معتبر نیست");
        }

        alert(`✅ کد تخفیف ${discount}% با موفقیت اعمال شد`);

        set({
          discountCode: trimmedCode,
          discountPercentage: discount,
        });
      },

      allQty: 0,
      getAllQty: () =>
        get().cart.reduce((total, item) => total + item.quantity, 0),
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCartStore;
