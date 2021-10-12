import { configureStore } from "@reduxjs/toolkit";

import usersSlice from "./users-slice";
import notificationSlice from "./notification-slice";

const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    notifications: notificationSlice.reducer,
  },
});

export default store;
