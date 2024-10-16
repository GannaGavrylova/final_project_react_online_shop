import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counterSlice";
import cart from "./slices/cartSlice";
import sale from "./slices/saleSlice";

const store = configureStore({
  reducer: {
    counter,
    cart,
    sale,
  },
});

export default store;
