import {csrfFetch} from './csrf';

const GET_USERS = 'users/GET_USERS'
const USER_POSTS = 'USER_POSTS'

const getUsers = (users) => {
    return {
        type: GET_USERS,
        users
    }
}

const userPosts = (posts) => {
  return {
      type: USER_POSTS,
      payload: posts
  }
}

export const allUsers = (users) => async dispatch => {
    const res = await csrfFetch(`/api/users`)
    const data = await res.json()
    dispatch(getUsers(data))
}

export const getUserPosts = (id) => async dispatch => {
  console.log(id, 'thunk')
  const res = await csrfFetch(`/api/users/${id}`);
  const data = await res.json()
  dispatch(userPosts(data));
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
        case USER_POSTS:
          let newState = Object.assign({}, state)
          action.payload.forEach(post => {
            newState[post.id] = post
          });
          return newState;
        default:
            return state
}
}
