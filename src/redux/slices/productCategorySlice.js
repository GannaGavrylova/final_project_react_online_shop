import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductsCategory = createAsyncThunk(
  "productCategory/fetchProductsCategory",
  async () => {
    const response = await axios.get(
      "http://localhost:3333/categories/${path}"
    );
    return response.data;
  }
);

const productCategorySlice = createSlice({
  name: "productCategory",
  initialState: {
    data: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchProductsCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productCategorySlice.reducer;
