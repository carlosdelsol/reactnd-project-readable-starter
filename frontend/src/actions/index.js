export const ADD_NEW_POSTS = 'ADD_NEW_POSTS'
export const ADD_COMMENTS = 'ADD_COMMENTS'
export const EDIT_POSTS = 'EDIT_POSTS'
export const EDIT_COMMENTS = 'EDIT_COMMENTS'
export const DELETE_POSTS = 'DELETE_POSTS'
export const DELETE_COMMENTS = 'DELETE_COMMENTS'

export function addNewPosts (){
  return{
    type: ADD_NEW_POSTS, 
  }
}
export function addComments (){
  return{
    type: ADD_COMMENTS, 
  }
}
export function editPosts (){
  return{
    type: EDIT_POSTS, 
  }
}
export function editComments (){
  return{
    type: EDIT_COMMENTS, 
  }
}
export function deletePosts (){
  return{
    type: DELETE_POSTS, 
  }
}
export function deleteComments (){
  return{
    type: DELETE_COMMENTS, 
  }
}