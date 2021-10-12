import { Dispatch } from "redux";
import { usersActions } from "./users-slice";
import { notificationActions } from "./notification-slice";

const hidePositivNotificationTime = 1000;

export const fetchUsersList = () => {
  return async (dispatch: Dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Could not fetch users data!");
      } else {
        dispatch(
          notificationActions.showNotification({
            status: "success",
            title: "Success!",
            message: "Fetched users data successfully!",
          })
        );
        setTimeout(
          () => dispatch(notificationActions.hideNotification()),
          hidePositivNotificationTime
        );
      }

      const data = await response.json();

      return data;
    };

    try {
      const usersList = await fetchData();
      dispatch(
        usersActions.fetchUsers({
          usersList: usersList,
        })
      );
    } catch (error) {
      dispatch(
        notificationActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching users data failed!",
        })
      );
    }
  };
};
