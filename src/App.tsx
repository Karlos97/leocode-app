import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersList } from "./store/users-actions";
import { notificationActions } from "./store/notification-slice";

import classes from "./App.module.scss";
import leocodeLogo from "./img/leocode-log.svg";

import UsersList from "./components/SearchList/UsersList";
import Notification from "./components/UI/Notification";
import { NotificationType } from "./types/notificationType";
function App() {
  const dispatch = useDispatch();
  const notification = useSelector(
    (state: {
      fetchDataNotifications: { notification: Array<NotificationType> };
    }) => state.fetchDataNotifications.notification
  );
  const showNotification = useSelector(
    (state: { fetchDataNotifications: { show: boolean } }) =>
      state.fetchDataNotifications.show
  );

  useEffect(() => {
    dispatch(fetchUsersList());
    if (notification.status === "success") {
      setTimeout(() => dispatch(notificationActions.hideNotification()), 1000);
    }
  }, [dispatch, notification.status]);

  return (
    <div className={classes.app}>
      <header className={classes["app-header"]}>
        <img
          src={leocodeLogo}
          alt="Leocode logo"
          className={classes["app-header-logo"]}
        />
        <p> This is recruitment task for Leocode company.</p>
      </header>
      {showNotification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <section className={classes["app-main"]}>
        <UsersList />
      </section>
    </div>
  );
}

export default App;
