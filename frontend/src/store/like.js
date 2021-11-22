import { csrfFetch } from "./csrf";

const LIKE = 'LIKE';
const ALL_LIKE = 'ALL_LIKE';
const ONE_LIKE = 'ONE_LIKE';

const like = like => ({
  type: LIKE,
  payload: like
});

const all_like = likes => ({
  type: ALL_LIKE,
  payload: likes
})

const one_like = like => ({
  type: ONE_LIKE,
  payload: like
})


export const likePost = id => async dispatch => {

  const response = await csrfFetch(`/api/likes/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'applications/json'
    },
  });

  if (response.ok) {
    const alike = await response.json();
    dispatch(like(like))
  }
}

export const getLikes = id => async dispatch => {

  const response = await csrfFetch(`/api/likes/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'applications/json'
    },
  });

  if (response.ok) {
    const alike = await response.json();
    dispatch(like(like))
  }
}

export const getPostLike = id => async dispatch => {

  const response = await csrfFetch(`/api/likes/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'applications/json'
    },
  });

  if (response.ok) {
    const alike = await response.json();
    dispatch(like(like))
  }
}

const intialState = {};

const likeReducer = (state = intialState, action) => {
  switch(action.type) {
    case LIKE: {

    }
    case ALL_LIKE: {

    }
    case ONE_LIKE: {

    }
    default:
      return state
  }
}
