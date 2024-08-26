// cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

interface CartProduct {
  productId: string;
  quantity: number;
}

interface CartState {
  products: CartProduct[];
}

// Initialize with an empty array
const initialState: CartState = {
  products: [],
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
    decrement: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const product = state.products.find((p) => p.productId === productId);

      if (product && product.quantity > 1) {
        product.quantity -= 1;
      } else if (product) {
        state.products = state.products.filter(
          (p) => p.productId !== productId
        );
      }

      saveToLocalStorage(state);
    },
    updateProduct: (state, action: PayloadAction<any>) => {
      console.log("Action Payload:", action.payload); // Debug log
      const productId = action.payload.id;
      const quantity = action.payload.quantity;

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

export const {
  increment,
  decrement,
  setQuantity,
  initializeCart,
  updateProduct,
} = cartSlice.actions;

export const selectProductQuantity = (state: RootState, productId: string) => {
  const product = state.cart.products.find((p) => p.productId === productId);
  return product?.quantity || 0;
};

export const cartReducer = cartSlice.reducer;
