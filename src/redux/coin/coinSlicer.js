// redux/coin/coinSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { coinList } from "./coinThunks"; // Import the thunk

const initialState = {
  isLoading: false,
  data: null,
  isError: false,
  errorMessage: "", // For storing error messages
};

// Slice definition
export const coinSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(coinList.pending, (state) => {
        state.isLoading = true;
        state.isError = false; // Reset error on new request
        state.errorMessage = ""; // Clear previous error message
      })
      .addCase(coinList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(coinList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message; // Store the error message
      });
  },
});

export default coinSlice.reducer;
