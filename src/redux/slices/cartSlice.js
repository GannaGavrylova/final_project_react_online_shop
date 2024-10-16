import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { orderSendRequest } from "../../utils/api";

// Асинхронный action для отправки данных на сервер
export const formOrder = createAsyncThunk(
  "cart/formOrder",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await orderSendRequest(formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const initialState = {
  data: [],
  orderStatus: "idle",
  orderError: null,
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
  extraReducers: (builder) => {
    builder
      .addCase(formOrder.pending, (state) => {
        console.log("Order form submission started");
        state.orderStatus = "loading";
      })
      .addCase(formOrder.fulfilled, (state, action) => {
        console.log("Order form submitted successfully", action.payload);
        state.orderStatus = "succeeded";
      })
      .addCase(formOrder.rejected, (state, action) => {
        console.log("Order form submission failed", action.payload);
        state.orderStatus = "failed";
        state.success = false;
        state.orderError = action.payload;
      });
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

export const selectCartCount = createSelector(
  (state) => state.cart.data || [],
  (CartItems) =>
    Array.isArray(CartItems)
      ? CartItems.reduce((total, item) => total + item.quantity, 0)
      : 0
);
