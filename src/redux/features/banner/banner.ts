import { BannerDetail } from "@/@types/Banner";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { items: BannerDetail[] } = {
  items: [],
};
export const bannerSlice = createSlice({
  name: "banner",
  initialState: initialState,
  reducers: {
    setBanners(state, action: PayloadAction<{ banner: BannerDetail }>) {
      const banner = action.payload.banner;
      const isExisting = state.items.find((item) => item._id === banner._id);

      if (!isExisting) {
        state.items.push(banner);
      }
    },
    removeBanners(state, action: PayloadAction<{ id: string }>) {
      state.items = state.items.filter(
        (item) => item._id !== action.payload.id
      );
    },
  },
});

export const { setBanners, removeBanners } = bannerSlice.actions;
export const bannerReducer = bannerSlice.reducer;
