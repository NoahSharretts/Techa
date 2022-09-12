import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import postReducer from './post';
import commentReducer from './comment';
import usersReducer from './users';
import profilePageReducer from './profilePage';
import followReducer from './follow';

const rootReducer = combineReducers({
  session,
  posts: postReducer,
  userPosts: profilePageReducer,
  comments: commentReducer,
  users: usersReducer,
  friends: followReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
