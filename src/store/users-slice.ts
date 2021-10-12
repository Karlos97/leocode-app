import { createSlice } from "@reduxjs/toolkit";

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
