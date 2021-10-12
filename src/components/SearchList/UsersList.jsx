import { useState } from "react";
import ListElement from "./ListElement";
import UsersListFilter from "../UI/UsersListFilter";
import { useSelector } from "react-redux";

import classes from "./UsersList.module.scss";

const UsersList = () => {
  const [inputVal, setInputVal] = useState("");
  const usersList = useSelector((state) => state.users.usersList);

  const onInputChangeHandler = (e) => {
    setInputVal(e.target.value.trim().toLowerCase());
  };

  console.log(inputVal);
  const UsersListLayout = (array) =>
    array?.map((user, index) => (
      <ListElement
        key={user.id}
        index={index + 1}
        name={user.name}
        userName={user.username}
      />
    ));

  return (
    <div className={classes["users-list"]}>
      <p> Users list </p>
      <UsersListFilter handleInputVal={onInputChangeHandler} />
      <ul>
        {inputVal === ""
          ? UsersListLayout(usersList)
          : UsersListLayout(
              usersList?.filter((el) =>
                el.name.toLowerCase().includes(inputVal)
              )
            )}
      </ul>
    </div>
  );
};
export default UsersList;
