import classes from "./UsersListFilter.module.scss";

const UsersListFilter = (props) => {
  return (
    <input
      className={classes.input}
      type="text"
      placeholder="Search by user name..."
      onChange={props.handleInputVal}
    />
  );
};
export default UsersListFilter;
