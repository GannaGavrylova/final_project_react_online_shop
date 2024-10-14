import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      const { id, title, image, price, discont_price, quantity } =
        action.payload;
      const existingItem = state.data.find((item) => item.id === id);
      if (existingItem) {
        state.data = state.data.map((item) => {
          if (item.id === id) {
            item.quantity += quantity || 1;
          }
          return item;
        });
      } else {
        state.data.push({
          id,
          quantity: quantity || 1,
          title,
          image,
          price,
          discont_price,
        });
      }
    },
    changeQuantity(state, { payload }) {
      const { method, value, id } = payload;
      state.data = state.data.map((item) => {
        if (item.id === id) {
          if (method === "decrement") {
            item.quantity -= item.quantity - value >= 0 ? value : 0;
          } else {
            item.quantity += value;
          }
        }
        return item;
      });
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      state.data = state.data.map((item) => {
        if (item.id === id) {
          item.quantity = quantity;
        }
        return item;
      });
    },
    removeCart(state, action) {
      state.data = state.data.filter((cart) => cart.id !== action.payload);
    },
    clearCart: (state) => {
      state.data = [];
    },
  },
});

export const {
  addProduct,
  changeQuantity,
  updateQuantity,
  removeCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

// addProduct(state, action) {
//   state.data.push(action.payload);
// },
