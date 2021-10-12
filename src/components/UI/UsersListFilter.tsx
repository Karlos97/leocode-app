import { ChangeEventHandler, FC } from "react";
import classes from "./UsersListFilter.module.scss";

type UsersListFilterProps = {
  onFilterChange: ChangeEventHandler<HTMLInputElement>;
};

const UsersListFilter: FC<UsersListFilterProps> = ({ onFilterChange }) => (
  <input
    className={classes.input}
    type="text"
    placeholder="Search by user name..."
    onChange={onFilterChange}
  />
);

export default UsersListFilter;
