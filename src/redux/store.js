import { configureStore } from "@reduxjs/toolkit";
import productCategory from "./slices/productCategorySlice";
import counter from "./slices/counterSlice";
import cart from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    productCategory,
    counter,
    cart,
  },
});

export default store;
