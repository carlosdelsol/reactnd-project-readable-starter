import { combineReducers } from 'redux'

import {
  RECEIVE_POSTS,
  RECEIVE_CATEGORIES,
  RECEIVE_COMMENTS,
  RECEIVE_POST,
  VOTE_POST,
  ADD_NEW_POSTS,
  ADD_COMMENTS,
  EDIT_POST,
  EDIT_COMMENTS,
  DELETE_POST,
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
    case RECEIVE_POSTS:
      return action.posts;
    case VOTE_POST:
      return state.map((post) => post.id === action.post.id ? action.post : post)
    case ADD_NEW_POSTS:
      return state
    case EDIT_POST:
      return state
    case DELETE_POST:
      console.log(action)
      console.log(state)
      return state.filter((post) => post.id !== action.id)
    default:
      return state
  }
}

function postSelected (state = {}, action) {
  switch (action.type) {
    case RECEIVE_POST :
      return action.post;
    case VOTE_POST:
      return state.id === action.post.id ? action.post : state
    default :
      return state
  }
}

function comments (state = {}, action) {
  switch (action.type) {
    case RECEIVE_COMMENTS :
      return (action.id && action.posts.length > 0) ? {
            ...state,
            [action.id]: action.posts.reduce(function(map, obj) {
              map[obj.id] = obj;
              return map;
          }, {})
        }: state
    case VOTE_POST:
      return {
        ...state,
        [action.post.parentId]: {
            ...state[action.post.parentId],
            [action.post.id]: action.post
          }
        }
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