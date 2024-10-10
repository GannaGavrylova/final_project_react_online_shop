import { configureStore } from "@reduxjs/toolkit";
import productCategory from "./slices/productCategorySlice";

const store = configureStore({
  reducer: {
    productCategory,
  },
});

export default store;
