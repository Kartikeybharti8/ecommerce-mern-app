import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState :{
    //products
    products: localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products"))
      : [],
      // quantity
      quantity: 0,
      //total
      total: 0,
  },
  reducers: {

    addtoProduct(state,action) {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
      localStorage.setItem("products", JSON.stringify(state.products));
    },
  
    updateamount(state,action){
      const id=action.payload.id;
      const type=action.payload.type;
      const index=state.products.findIndex(p=>p._id===id);

      if(type){
        state.products[index].quantity+=1;
        state.total+=state.products[index].price;
      }
      if(!type &&state.products[index].quantity>1){
        state.products[index].quantity-=1;  
        state.total-=state.products[index].price;
      }
    },
    removeFromCart(state, action) {
        //  console.log(action.payload._id,state.products[2]._id)
          const nextproducts = state.products.filter(
            (item) => item._id !== action.payload._id
          );

          state.products = nextproducts;
        localStorage.setItem("products", JSON.stringify(state.products));

    },
    getTotals(state, action) {
      let { total, quantity } = state.products.reduce(
         (cartTotal, product) => {
          const { price, quantity } = product;
          const itemTotal = price * quantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += 1;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.quantity = quantity;
      state.total = total;
    },
    clearCart(state, action) {
      state.products = [];
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    clearingCart(state, action) {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const {updateamount,removeFromCart, addtoProduct,getTotals, clearCart } =
  cartSlice.actions;

export const { addProduct,clearingCart } = cartSlice.actions;
export default cartSlice.reducer;
