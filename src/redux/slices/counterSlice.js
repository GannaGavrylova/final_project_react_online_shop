import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    data: 1,
  },
  reducers: {
    plus(state) {
      state.data = state.data + 1;
    },
    minus(state) {
      state.data = state.data - 1;
    },
    resetState: (state) => {
      state.data = 1;
    },
  },
});

export const { plus, minus, resetState } = counterSlice.actions;
export default counterSlice.reducer;
