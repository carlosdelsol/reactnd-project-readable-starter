import { combineReducers } from 'redux'
import _ from 'lodash'

import {
  RECEIVE_POSTS,
  RECEIVE_CATEGORIES,
  RECEIVE_COMMENTS,
  RECEIVE_POST,
  VOTE_POST,
  ADD_NEW_POST,
  ADD_NEW_COMMENT,
  EDIT_POST,
  EDIT_COMMENT,
  DELETE_POST,
  DELETE_COMMENT,
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
    case ADD_NEW_POST:
      return {...state, [action.post.id]:action.post}
    case EDIT_POST:
      return state
    case DELETE_POST:
      return state.filter(post => post.id !== action.post.id)
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
    case RECEIVE_COMMENTS:
      return (action.id && action.posts.length > 0) ? {
            ...state,
            [action.id]: action.posts.reduce(function(map, obj) {
              map[obj.id] = obj;
              return map;
          }, {})
        } : state
    case VOTE_POST:
      return (action.post.parentId) ? {
        ...state,
        [action.post.parentId]: {
            ...state[action.post.parentId],
            [action.post.id]: action.post
          }
        } : state
    case ADD_NEW_COMMENT:
      return (action.post.parentId) ? {
        ...state,
        [action.post.parentId]: {
            ...state[action.post.parentId],
            [action.post.id]: action.post
          }
        } : state
    case EDIT_COMMENT:
      return state
    case DELETE_COMMENT:
      return  { ...state,
                  [action.comment.parentId]: _.values(state[action.comment.parentId])
                                              .filter(comment => comment.id !== action.comment.id)
                                              .reduce(function(map, obj) { 
                                                map[obj.id] = obj; 
                                                return map; 
                                              }, {})
              }
    default:
      return state
  }
}

export default combineReducers({
  categories,
  posts,
  comments,
  postSelected
})