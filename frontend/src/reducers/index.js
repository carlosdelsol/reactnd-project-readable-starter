import { combineReducers } from 'redux'

import {
  RECEIVE_POSTS,
  RECEIVE_CATEGORIES,
  ADD_NEW_POSTS,
  ADD_COMMENTS,
  EDIT_POSTS,
  EDIT_COMMENTS,
  DELETE_POSTS,
  DELETE_COMMENTS,
} from '../actions'


function categories (state = {}, action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES :
      return action.categories;
    default :
      return state
  }
}

function posts (state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS :
      return action.posts;
    case ADD_NEW_POSTS :
      return state
    case EDIT_POSTS :
      return state
    case DELETE_POSTS :
      return state
    default :
      return state
  }
}

function comments (state = {}, action) {
  switch (action.type) {
    case ADD_COMMENTS :
      return state
    case EDIT_COMMENTS :
      return state
    case DELETE_COMMENTS :
      return state
    default :
      return state
  }
}

export default combineReducers({
  categories,
  posts,
  comments,
})