import { ItemDetail } from "@/@types/Item";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { products: ItemDetail[] } = {
  products: [],
};
export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setProduct(state, action: PayloadAction<{ product: ItemDetail }>) {
      const product = action.payload.product;
      const isExisting = state.products.find((item) => item._id === product._id);

      if (!isExisting) {
        state.products.push(product);
      }
    },
    removeProduct(state, action: PayloadAction<{ id: string }>) {
      state.products = state.products.filter(
        (item) => item._id !== action.payload.id
      );
    },
  },
});

export const { setProduct, removeProduct } = productSlice.actions;
export const productReducer = productSlice.reducer;
