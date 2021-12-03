import { createSlice } from "@reduxjs/toolkit";
import http from "../../config/http";
import { getUser } from "../../config/storage";

const user = JSON.parse(getUser());
if (user?.token) {
  http.defaults.headers["Authorization"] = `Bearer ${user?.token}`;
}
const initialState = {
  userLoggedIn: !!user,
  user: user ? user : {},
};

export const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.userLoggedIn = true;
      state.user = action.payload;
    },
  },
});

export const { updateUser } = slice.actions;
export default slice.reducer;
