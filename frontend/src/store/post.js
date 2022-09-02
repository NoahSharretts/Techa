import { csrfFetch } from "./csrf";

const LOAD_ALL = 'LOAD_ALL'
const LOAD_ONE = 'LOAD_ONE'
const ADD_ONE = 'ADD_ONE'
const UPDATE_ONE = 'UPDATE_ONE'
const DELETE_ONE = 'DELETE_ONE'

const load_all = list => ({
  type: LOAD_ALL,
  payload: list
})

const load_one = one => ({
  type: LOAD_ONE,
  payload: one
})



const add_one = one => ({
  type: ADD_ONE,
  payload: one
})

const update_one = one => ({
  type: UPDATE_ONE,
  payload: one
})

const delete_one = one => ({
  type: DELETE_ONE,
  payload: one
})

//-------------Thunks-------------
export const getPosts = () => async dispatch => {

  const response = await csrfFetch(`/api/posts`)

  if (response.ok) {
    const posts = await response.json();
    dispatch(load_all(posts))
  }
}

export const getPostById = (postId) => async dispatch => {

  const response = await csrfFetch(`/api/posts/${postId}`)

  if (response.ok) {
    const post = await response.json();
    dispatch(load_one(post))
  }
}


export const createPost = payload => async dispatch => {
  const { photo, body, userId } = payload;

  const formData = new FormData();
  formData.append('body', body);
  formData.append('userId', userId);


  if(photo) formData.append('photo', photo);

  const response = await csrfFetch(`/api/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
  });

  if (response.ok) {
    const post = await response.json();
    dispatch(add_one(post.post))
    return post
  }
}

export const updatePost = payload => async dispatch => {

  const response = await csrfFetch(`/api/posts/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const post = await response.json();
    dispatch(update_one(post))
    return post
  }
}

export const deletePost = (postId) => async dispatch => {

  const response = await csrfFetch(`/api/posts/${postId}`, {
    method: 'DELETE'
  })

  if (response.ok) {
    const post = await response.json();
    dispatch(delete_one(post))
  }
}

//-------------Reducer------------

const intialState = {}

const postReducer = (state = intialState, action) => {
  switch(action.type) {
    case LOAD_ALL: {
      let newState = Object.assign({}, state);
      action.payload.forEach(post => {
        newState[post.id] = post
      });
      return newState;
    }

    case ADD_ONE: {
      let newState = Object.assign({}, state);
      let newPost = action.payload;
      newState[newPost.id] = newPost;
      return newState;
    }
    case LOAD_ONE: {
      let newState = Object.assign({}, state);
      action.payload.array.forEach(post => {
        newState[post.id] = post
      });
      return newState;
    }
    case UPDATE_ONE: {
      let newState = Object.assign({}, state);
      let newPost = action.payload;
      newState[newPost.id] = newPost;
      return newState;
    }
    case DELETE_ONE: {
      let newState = {...state};
      delete newState[action.payload.id];
      return newState
    }
    default:
      return state;
  }
}


export default postReducer;
