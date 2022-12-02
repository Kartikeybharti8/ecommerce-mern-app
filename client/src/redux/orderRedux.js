import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    userId:"",
    address:"",
    products: [],
    amount: 0,
    status:"",
  },
  reducers: {
    addProduct: (state, action) => {
      state.userId = action.payload.userId;
      state.products.push(action.payload.products);
      state.amount += action.payload.amount;
      state.status=action.payload.status;
      state.address = action.payload.address;

    },
  },
});

export const { addProduct } = orderSlice.actions;
export default orderSlice.reducer;
