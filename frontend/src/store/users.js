import {csrfFetch} from './csrf';

const GET_USERS = 'GET_USERS'
const ONE_USER = 'ONE_USER'
const SEARCH_USERS = 'SEARCH_USERS'

const getUsers = (users) => {
    return {
        type: GET_USERS,
        users
    }
}

const getUser = (user) => {
  return {
    type: ONE_USER,
    payload: user
  }
}

const searchUsers = (users) => {
  return {
    type: SEARCH_USERS,
    payload: users
  }
}

export const allUsers = (users) => async dispatch => {
  const res = await csrfFetch(`/api/users`)
  const data = await res.json()
  dispatch(getUsers(data))
}

export const getOneUser = (id) => async dispatch => {
  const res = await csrfFetch(`/api/users/${id}`);
  const data = await res.json()
  dispatch(getUser(data));
  return data;
}

export const searchUser = (input) => async (dispatch) => {
  const user ={ input }
  const res = await csrfFetch(`/api/users/search`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  const data = await res.json();
  dispatch(searchUsers(data));
};

const initialState = {}
export default function usersReducer(state = initialState, action) {
    switch (action.type){
        case GET_USERS :
          const allUsers = {}
          Object.values(action.users).forEach((user)=> {
              allUsers[user.id] = user;
          })
          return { ...state, ...allUsers}
        case ONE_USER:
          let newState = Object.assign({}, state)
          let user = action.payload

          newState = user
          return newState;
        case SEARCH_USERS:
          const searchedUsers = {}
          action.payload.forEach((user) => {
            searchedUsers[user.id] = user
          })
          return {...searchedUsers}
        default:
            return state
}
}
