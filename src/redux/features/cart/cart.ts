import { CartItem } from "@/@types/Item";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  items: CartItem[];
} = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addProductToCart(state, action: PayloadAction<{ item: CartItem }>) {
      const { item } = action.payload;
      const existingProduct = state.items.find(
        (product) => item._id === product._id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push(item);
      }
    },
    removeProductFromCart(state, action: PayloadAction<{ id: string }>) {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item._id !== id);
    },
    updateProductQuantity(
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) {
      const { id, quantity } = action.payload;
      const existingProduct = state.items.find((item) => item._id === id);
      if (existingProduct) {
        existingProduct.quantity = quantity;
      }
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  updateProductQuantity,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
