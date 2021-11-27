import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
// import orderReducer from "./slice/orderSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    // order: orderReducer,
  },
});
