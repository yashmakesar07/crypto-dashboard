// redux/coin/coinSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { coinList, allCoins } from "./coinThunks"; // Import the thunks

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
      // Handling the coinList thunk
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
      })
      // Handling the allCoins thunk
      .addCase(allCoins.pending, (state) => {
        state.isLoading = true;
        state.isError = false; // Reset error on new request
        state.errorMessage = ""; // Clear previous error message
      })
      .addCase(allCoins.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload; // Set data to the payload of allCoins thunk
      })
      .addCase(allCoins.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message; // Store the error message
      });
  },
});

export default coinSlice.reducer;
