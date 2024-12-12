import { configureStore } from "@reduxjs/toolkit";
import cartSlices from "./cartSlices/cartSlices";

const store=configureStore({
    reducer:{
        cart:cartSlices,
    }
})
export default store