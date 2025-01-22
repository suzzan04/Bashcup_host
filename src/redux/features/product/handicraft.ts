import { ItemDetail } from "@/@types/Item";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { items: ItemDetail[] } = {
  items: [],
};
export const handicraftSlice = createSlice({
  name: "handicraft",
  initialState: initialState,
  reducers: {
    setHandicraftItems(state, action: PayloadAction<{ product: ItemDetail }>) {
      const product = action.payload.product;
      const isExisting = state.items.find((item) => item._id === product._id);

      if (!isExisting) {
        state.items.push(product);
      }
    },
    removeHandicraftItems(state, action: PayloadAction<{ id: string }>) {
      state.items = state.items.filter(
        (item) => item._id !== action.payload.id
      );
    },
  },
});

export const { setHandicraftItems, removeHandicraftItems } =
  handicraftSlice.actions;
export const handicraftReducer = handicraftSlice.reducer;
