import { configureStore } from "@reduxjs/toolkit";
import productCategory from "./slices/productCategorySlice";
import counter from "./slices/counterSlice";

const store = configureStore({
  reducer: {
    productCategory,
    counter,
  },
});

export default store;
