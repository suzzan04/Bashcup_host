"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import { persistReducer } from "redux-persist";
import { createPersistStorage } from "@/utils/storage";
import { productReducer } from "./features/product/product";
import { handicraftReducer } from "./features/product/handicraft";
import { cartReducer } from "./features/cart/cart";
import { bannerReducer } from "./features/banner/banner";

const cartConfig = {
  key: "cart",
  storage: createPersistStorage(),
};

// const categoryConfig = {
//   key: "category",
//   storage: createPersistStorage(),
// };

const productConfig = {
  key: "product",
  storage: createPersistStorage(),
};
const handicraftConfig = {
  key: "handicraft",
  storage: createPersistStorage(),
};
const bannerConfig = {
  key: "banner",
  storage: createPersistStorage(),
};

// const authPersistReducer = persistReducer(authConfig, authReducer);
// const categoryPersistReducer = persistReducer(categoryConfig, categoryReducer);
const cartPersistReducer = persistReducer(cartConfig, cartReducer);
const productPersistReducer = persistReducer(productConfig, productReducer);
const handicraftPersistReducer = persistReducer(
  handicraftConfig,
  handicraftReducer
);
const bannerPersistReducer = persistReducer(bannerConfig, bannerReducer);

const rootReducer = combineReducers({
  //   auth: authPersistReducer,
  //   category: categoryPersistReducer,
  cart: cartPersistReducer,
  product: productPersistReducer,
  handicraft: handicraftPersistReducer,
  banner: bannerPersistReducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
