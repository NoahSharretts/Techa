import {csrfFetch} from './csrf';

const GET_USERS = 'GET_USERS'
const ONE_USER = 'ONE_USER'

const getUsers = (users) => {
    return {
        type: GET_USERS,
        users
    }
}

const getUser = (posts) => {
  return {
      type: ONE_USER,
      payload: posts
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
        default:
            return state
}
}
