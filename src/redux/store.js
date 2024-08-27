import { configureStore } from "@reduxjs/toolkit";  
import coinSlicer from "./coin/coinSlicer";

 export const store = configureStore(({
    reducer: coinSlicer,
 }))

