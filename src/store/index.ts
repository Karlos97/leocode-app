import { configureStore } from "@reduxjs/toolkit";

import usersSlice from "./users-slice";
import notificationSlice from "./notification-slice";

const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    fetchDataNotifications: notificationSlice.reducer,
  },
});

export default store;
