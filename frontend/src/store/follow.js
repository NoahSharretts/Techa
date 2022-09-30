import { csrfFetch } from "./csrf";

const LOAD_FOLLOWS = 'LOAD_FOLLOWS'

const getFollows = (users) => ({
  type: LOAD_FOLLOWS,
  payload: users
});

export const findFriends = (userId) => async dispatch => {
  const response = await csrfFetch(`/api/follows/${userId}`)

  if (response.ok) {
    const data = await response.json()
    dispatch(getFollows(data))
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
    dispatch(getFollows(data))
  }
}

const intialState = {}

const followReducer = (state = intialState, action) => {
  switch(action.type) {
    case LOAD_FOLLOWS: {
      return { ...action.payload }
    }
    default:
      return state;
  }
}


export default followReducer;
