import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersList } from "./store/users-actions";
import classes from "./App.module.scss";
import leocodeLogo from "./img/leocode-log.svg";
import UsersList from "./components/SearchList/UsersList";
import Notification from "./components/UI/Notification";
import {
  selectNotificationData,
  selectShowNotification,
} from "./store/selectors/selectors";

function App() {
  const dispatch = useDispatch();

  const { message, status, title } = useSelector(selectNotificationData);
  const showNotification = useSelector(selectShowNotification);

  useEffect(() => {
    dispatch(fetchUsersList());
  }, [dispatch, status]);

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
      {showNotification && <Notification status={status} title={title} message={message} />}
      <section className={classes["app-main"]}>
        <UsersList />
      </section>
    </div>
  );
}

export default App;
