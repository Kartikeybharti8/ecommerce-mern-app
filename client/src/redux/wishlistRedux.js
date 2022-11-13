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

    removeFromWishlist: (state, action) => {
      //  console.log(action.payload._id,state.products[2]._id)
        const nextproducts = state.products.filter(
          (item) => item._id !== action.payload._id
        );
  
        state.products = nextproducts;
      localStorage.setItem("products", JSON.stringify(state.products));
    },
  },
});

export const { wishProduct, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
