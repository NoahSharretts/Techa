import {csrfFetch} from './csrf';

const GET_USERS = 'users/GET_USERS'
const GET_USER = 'GET_USER'

const getUsers = (users) => {
    return {
        type: GET_USERS,
        users
    }
}

const getUser = (user) => {
  return {
      type: GET_USER,
      payload: user
  }
}

export const allUsers = (users) => async dispatch => {
    const res = await csrfFetch(`/api/users`)
    const data = await res.json()
    dispatch(getUsers(data))
}

export const getOneUser = (id) => async dispatch => {
  console.log(id, 'thunk')
  const res = await csrfFetch(`/api/users/${id}`);
  const data = await res.json()
  dispatch(getUser(data));
  return data;
}

const initialState = {}
export default function usersReducer(state = initialState, action) {
    switch (action.type){
        case GET_USERS :
          const allUsers = {}
          Object.values(action.users).forEach((user)=> {
              allUsers[user.id] = user;
          })
          return { ...state, ...allUsers}
        case GET_USER:
          let newState = {};
          // newState = Object.assign({}, state)
          newState[action.payload.id] = action.payload

          return newState;
        default:
            return state
}
}
