import { createSlice } from "@reduxjs/toolkit";
import { notificationActions } from "./notification-slice";

const usersSlice = createSlice({
  name: "Users List",
  initialState: {
    usersList: [],
  },
  reducers: {
    fetchUsers(state, action) {
      state.usersList = action.payload.usersList;
    },
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice;
