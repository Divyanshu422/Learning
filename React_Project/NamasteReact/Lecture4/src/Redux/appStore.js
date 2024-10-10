import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// Log the cartReducer for debugging
console.log("the cart contains", cartReducer);
// This creates the store, which will hold all the slices (pieces of data).
const appStore = configureStore({
  // Slices
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;

