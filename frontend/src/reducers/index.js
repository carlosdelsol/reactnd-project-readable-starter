import { combineReducers } from 'redux'

import {
  RECEIVE_POSTS,
  RECEIVE_CATEGORIES,
  RECEIVE_COMMENTS,
  RECEIVE_POST,
  VOTE_POST,
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
      return action.categories.categories;
    default :
      return state
  }
}

function posts (state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS :
      return action.posts;
    case VOTE_POST:
      return state.map((post) => post.id === action.post.id ? action.post : post)
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

function postSelected (state = {}, action) {
  switch (action.type) {
    case RECEIVE_POST :
      return action.post;
    default :
      return state
  }
}

function comments (state = {}, action) {
  switch (action.type) {
    case RECEIVE_COMMENTS :
      return action.posts
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
  postSelected
})