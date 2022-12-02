import { configureStore, combineReducers ,applyMiddleware } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import wishlistReducer from "./wishlistRedux";
import orderReducer from "./orderRedux";
import userReducer from "./userRedux";
import thunk from "redux-thunk";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({ user: userReducer, cart: cartReducer, orders:orderReducer,wishlist: wishlistReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  applyMiddleware:applyMiddleware(thunk)
  }
);

export let persistor = persistStore(store);
