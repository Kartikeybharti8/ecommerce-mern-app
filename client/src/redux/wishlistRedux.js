import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    products: [],
    quantity: 0,
    isFilled: false,
  },
  reducers: {
    wishProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.isFilled = true;
    },

    removeFromWishlist: (state, action) => {
      //  console.log(action.payload._id,state.products[2]._id)
        state.quantity -= 1;
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
