import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    products: [],
    quantity: 0,
  },
  reducers: {
    wishProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
    },
  },
});

export const { wishProduct } = wishlistSlice.actions;
export default wishlistSlice.reducer;
