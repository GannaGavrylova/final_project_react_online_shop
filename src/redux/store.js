import { configureStore } from "@reduxjs/toolkit";
import productCategory from "./slices/productCategorySlice";
import counter from "./slices/counterSlice";
import cart from "./slices/cartSlice";
import sale from "./slices/saleSlice";

const store = configureStore({
  reducer: {
    productCategory,
    counter,
    cart,
    sale,
  },
});

export default store;
