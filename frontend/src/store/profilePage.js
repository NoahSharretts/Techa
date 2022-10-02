import { csrfFetch } from "./csrf";

const LOAD_USER_POSTS = 'LOAD_USER_POSTS'

const load_user_posts = posts => ({
  type: LOAD_USER_POSTS,
  payload: posts
})

export const getUserPosts = (userId) => async dispatch => {

  const response = await csrfFetch(`/api/posts/user/${userId}`)

  if (response.ok) {
    const posts = await response.json();
    dispatch(load_user_posts(posts))
  }
}

const intialState = {}

const profilePageReducer = (state = intialState, action) => {
  switch(action.type) {
    case LOAD_USER_POSTS: {
      let newState = {};
      action.payload.forEach((post, i) => {
        newState[i] = post
      });
      return newState;
    }
    default:
      return state;
  }
}

export default profilePageReducer;
