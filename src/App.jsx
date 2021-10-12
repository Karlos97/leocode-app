import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import classes from "./App.module.scss";
import leocodeLogo from "./img/leocode-log.svg";

import UsersList from "./components/SearchList/UsersList";

import { fetchUsersList } from "./store/users-actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersList());
  }, [dispatch]);

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
      {/* <Table /> */}
      <section className={classes["app-main"]}>
        <UsersList />
        {/* <UsersList className={classes["App-main-list"]}/> */}
      </section>
    </div>
  );
}

export default App;
