import { combineReducers } from 'redux';
// must add a key of 'form' to object below
import { reducer as formReducer } from 'redux-form';

import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
