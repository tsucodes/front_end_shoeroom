import { combineReducers } from 'redux';

import posts from './posts';
import userauth from './userAuth'

export default combineReducers({ posts, userauth });