import { usersActions } from "./users-slice";

export const fetchUsersList = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Could not fetch users data!");
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
      alert(error);
    }
  };
};
