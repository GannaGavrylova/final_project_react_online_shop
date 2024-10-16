import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { sendSaleRequest } from "../../utils/api";

// Асинхронный action для отправки данных на сервер
export const sendSaleForm = createAsyncThunk(
  "sale/sendSaleForm",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await sendSaleRequest(formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const saleSlice = createSlice({
  name: "sale",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    resetState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendSaleForm.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(sendSaleForm.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(sendSaleForm.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { resetState } = saleSlice.actions;
export default saleSlice.reducer;
