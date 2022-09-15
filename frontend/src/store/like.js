import { csrfFetch } from "./csrf";

const LIKE = 'LIKE';

const like = like => ({
  type: LIKE,
  payload: like
});

export const likePost = id => async dispatch => {

  const response = await csrfFetch(`/api/likes/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'applications/json'
    },
  });

  if (response.ok) {
    const alike = await response.json();
    dispatch(like(alike))
  }
}
