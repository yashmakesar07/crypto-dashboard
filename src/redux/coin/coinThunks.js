// redux/coin/coinThunks.js

import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://api.coingecko.com/api/v3/simple/supported_vs_currencies?x_cg_demo_api_key=CG-7n8rrZGoQvU2s4SCARCasqo7";

// Thunk action for fetching the coin list
export const coinList = createAsyncThunk("coins/fetchCoinList", async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch coin list");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error.message || "Unknown error occurred";
  }
});
