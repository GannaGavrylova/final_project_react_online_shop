import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.data.push(action.payload);
    },
    removeCart(state, action) {
      state.data = state.data.filter((cart) => cart.id !== action.payload);
    },
  },
});

export const { addProduct, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
