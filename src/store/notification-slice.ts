import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "Fetch data notification",
  initialState: {
    notification: {
      status: "pending",
      title: "Fetching...",
      message: "",
    },
    show: true,
  },
  reducers: {
    hideNotification(state) {
      state.show = false;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const notificationActions = notificationSlice.actions;

export default notificationSlice;
