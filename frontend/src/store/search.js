import { csrfFetch } from "./csrf";
const GET_USERS = "search/GET_USERS";

const search_users = (users) => ({
  type: GET_USERS,
  users,
});

export const searchUsers = (input) => async (dispatch) => {

  const obj = {
    input,
  };

  const res = await csrfFetch("/api/users/search", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });
  const data = await res.json();

  dispatch(search_users(data));
};

const initialState = {};
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
         const allUsers = {};
        action.users.forEach((user) => {
            allUsers[user.id] = user;
        });
    return {...allUsers}
    default:
      return state;
  }
};

export default searchReducer;
