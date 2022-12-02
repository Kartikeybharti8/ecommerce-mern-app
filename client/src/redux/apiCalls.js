import _ from "lodash";

import { 
  loginFailure,
  loginStart, 
  loginSuccess,
  registerStart,
  registerFailure,
  registerSuccess, } from "./userRedux";

import{
  addProduct
} from "./orderRedux";

  
import { publicRequest } from "../requestMethods";

export const order = async (dispatch,user,cart) => {

  try {
    var prodts = _.map(cart.products, function(prod) { return _.pick(prod, '_id', 'quantity','desc','title','img','price','inStock'); });
    var orders = {
        userId:user._id ,
        products: prodts,
        amount: cart.total,
        address:user.email,
        status:"pending",
      }
    const res = await publicRequest.post('/orders', orders);

    console.log("this is api calls",res.data)

    //finding orders
    // const res = await publicRequest.get("/orders/find/"+userId);
    // console.log("2nd api calls",res.data[0])
    dispatch(addProduct(orders));
  } catch (err) {
    console.log(err,"arre error agya");
    return 0;
  }

};

export const login = async (dispatch, user) => {
  // localStorage.setItem("isLoggedIn",true);

  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);

    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post('/auth/register', user);
    dispatch(registerSuccess(res.data));
  } catch (error) {
    dispatch(registerFailure());
  }
};
