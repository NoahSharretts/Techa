import { csrfFetch } from "./csrf";

const LOAD_COMMENTS = 'LOAD_COMMENTS'
const LOAD_COMMENT = 'LOAD_COMMENT'
const ADD_COMMENT = 'ADD_COMMENT'
const UPDATE_COMMENT = 'UPDATE_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'

const load_comments = list => ({
  type: LOAD_COMMENTS,
  payload: list
})

const load_comment = comment => ({
  type: LOAD_COMMENT,
  payload: comment
})

const add_comment = comment => ({
  type: ADD_COMMENT,
  payload: comment
})

const update_comment = comment => ({
  type: UPDATE_COMMENT,
  payload: comment
})

const delete_comment = comment => ({
  type: DELETE_COMMENT,
  payload: comment
})

//-------------Thunks-------------
export const getComments = () => async dispatch => {

  const response = await csrfFetch(`/api/comments`)

  if (response.ok) {
    const comments = await response.json();
    dispatch(load_comments(comments))
  }
}

export const getCommentById = (commentId) => async dispatch => {

  const response = await csrfFetch(`/api/comments/${commentId}`)

  if (response.ok) {
    const comment = await response.json();
    dispatch(load_comment(comment))
  }
}

export const createComment = payload => async dispatch => {
  const response = await csrfFetch(`/api/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const comment = await response.json();
    dispatch(add_comment(comment))
  }
}

export const updateComment = payload => async dispatch => {
  console.log(payload, 'payload')
  const response = await csrfFetch(`/api/comments/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const comment = await response.json();
    dispatch(update_comment(comment))
    return comment
  }
}

export const deleteComment = (commentId) => async dispatch => {

  const response = await csrfFetch(`/api/comments/${commentId}`, {
    method: 'DELETE'
  })

  if (response.ok) {
    const comment = await response.json();
    dispatch(delete_comment(comment))
  }
}

//-------------Reducer------------

const intialState = {}

const commentReducer = (state = intialState, action) => {
  switch(action.type) {
    case LOAD_COMMENTS: {
      let newState = Object.assign({}, state);
      action.payload.forEach(comment => {
        newState[comment.id] = comment
      });
      return newState;
    }
    case ADD_COMMENT: {
      let newState = Object.assign({}, state);
      let newComment = action.payload;
      newState[newComment.id] = newComment;
      return newState;
    }
    case LOAD_COMMENT: {
      let newState = Object.assign({}, state);
      action.payload.array.forEach(comment => {
        newState[comment.id] = comment
      });
      return newState;
    }
    case UPDATE_COMMENT: {
      let newState = Object.assign({}, state);
      let newComment = action.payload;
      newState[newComment.id] = newComment;
      return newState;
    }
    case DELETE_COMMENT: {
      let newState = {...state};
      delete newState[action.payload.id];
      return newState
    }
    default:
      return state;
  }
}


export default commentReducer;
