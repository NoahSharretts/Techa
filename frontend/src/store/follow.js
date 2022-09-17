import { csrfFetch } from "./csrf";

const LOAD_FOLLOWS = 'LOAD_FOLLOWS'


const getFollows = (users, userId) => ({
  type: LOAD_FOLLOWS,
  payload: users, userId
});

export const findFollows = (userId) => async dispatch => {
  const response = await csrfFetch(`/api/follows/${userId}`)

  if (response.ok) {
    const data = await response.json()
    dispatch(getFollows(data, userId))
  }
}

export const followUser = (userId) => async dispatch => {
  const response = await csrfFetch(`/api/follows/${userId}`, {
    method: "POST",
    headers : {
      "Content-Type": "application/json"
    },
  })

  if (response.ok) {
    const data = await response.json()
    dispatch(getFollows(data, userId))
  }
}


export const unfollowUser = (userId) => async dispatch => {
  const response = await csrfFetch(`/api/follows/${userId}`, {
    method: "DELETE",
    headers : {
      "Content-Type": "application/json"
    },
  })

  if (response.ok) {
    const data = await response.json()
    dispatch(getFollows(data, userId))
  }
}


const intialState = {}

const followReducer = (state = intialState, action) => {
  switch(action.type) {
    case LOAD_FOLLOWS: {
      return { ...state, [action.userId]: action.payload }
    }
    default:
      return state;
  }
}


export default followReducer;
