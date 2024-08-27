import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

interface CartProduct {
  productId: string;
  quantity: number;
}

interface CartState {
  products: CartProduct[];
}

// Load cart products from localStorage, if available
const loadFromLocalStorage = (): CartProduct[] => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem("Medicine-Cart");
    if (storedCart) {
      return JSON.parse(storedCart);
    }
  }
  return [];
};

// Initialize state with products from localStorage
const initialState: CartState = {
  products: loadFromLocalStorage(),
};

const saveToLocalStorage = (state: CartState) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("Medicine-Cart", JSON.stringify(state.products));
  }
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initializeCart: (state, action: PayloadAction<CartProduct[]>) => {
      state.products = action.payload;
      saveToLocalStorage(state);
    },

    increment: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const product = state.products.find((p) => p.productId === productId);

      if (product) {
        product.quantity += 1;
      } else {
        state.products.push({ productId, quantity: 1 });
      }

      saveToLocalStorage(state);
    },

    // decrement: (state, action: PayloadAction<string>) => {
    //   const productId = action.payload;
    //   const product = state.products.find((p) => p.productId === productId);

    //   if (product && product.quantity > 1) {
    //     product.quantity -= 1;
    //   } else if (product) {
    //     state.products = state.products.filter(
    //       (p) => p.productId !== productId
    //     );
    //   }

    //   saveToLocalStorage(state);
    // },

    updateProduct: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      console.log("Action Payload:", action.payload); // Debug log
      const { id: productId, quantity } = action.payload;

      const product = state.products.find((p) => p.productId === productId);

      if (product) {
        product.quantity = quantity;
        console.log("Product updated:", product); // Debug log
      } else {
        state.products.push({ productId, quantity });
        console.log("Product added:", { productId, quantity }); // Debug log
      }

      saveToLocalStorage(state);
    },

    setQuantity: (
      state,
      action: PayloadAction<{ productId: string; quantity: number }>
    ) => {
      const { productId, quantity } = action.payload;
      const product = state.products.find((p) => p.productId === productId);

      if (product) {
        product.quantity = quantity;
      } else {
        state.products.push({ productId, quantity });
      }

      saveToLocalStorage(state);
    },
  },
});

export const { increment, setQuantity, initializeCart, updateProduct } =
  cartSlice.actions;

export const selectProductQuantity = (state: RootState, productId: string) => {
  const product = state.cart.products.find((p) => p.productId === productId);
  return product?.quantity || 0;
};

export const cartReducer = cartSlice.reducer;
