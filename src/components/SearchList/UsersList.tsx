import { ChangeEvent, useState } from "react";
import ListElement from "./ListElement";
import UsersListFilter from "../UI/UsersListFilter";
import { RootStateOrAny, useSelector } from "react-redux";

import classes from "./UsersList.module.scss";
import { UserType } from "../../types/userType";

const UsersList = () => {
  const [searchUsersInputValue, setSearchUsersInputValue] = useState("");
  const usersList = useSelector(
    (state: RootStateOrAny) => state.users.usersList
  );

  const onFilterChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchUsersInputValue(e.target.value.trim().toLowerCase());
  };

  const UsersListLayout = (array: Array<UserType>) =>
    array?.map((user, index: number) => (
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
      <UsersListFilter onFilterChange={onFilterChangeHandler} />
      <ul>
        {searchUsersInputValue === ""
          ? UsersListLayout(usersList)
          : UsersListLayout(
              usersList?.filter((user: User) =>
                user.name.toLowerCase().includes(searchUsersInputValue)
              )
            )}
      </ul>
    </div>
  );
};
export default UsersList;
