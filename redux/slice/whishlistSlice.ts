import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistProduct {
  productId: string;
}

interface WishlistState {
  products: WishlistProduct[];
}

const loadFromLocalStorage = (): WishlistProduct[] => {
  if (typeof window !== "undefined") {
    const storedWishlistState = localStorage.getItem("Medicine-Wishlist");
    if (storedWishlistState) {
      return JSON.parse(storedWishlistState);
    }
  }
  return [];
};

const initialState: WishlistState = {
  products: loadFromLocalStorage(),
};

const saveToLocalStorage = (state: WishlistState) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("Medicine-Wishlist", JSON.stringify(state.products));
  }
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      console.log(id);
      const productExists = state.products.some((p) => p.productId === id);

      if (!productExists) {
        state.products.push({ productId: id });
      }

      saveToLocalStorage(state);
    },

    removeFromWishlist: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;

      state.products = state.products.filter((p) => p.productId !== id);

      saveToLocalStorage(state);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export const wishlistReducer = wishlistSlice.reducer;
