import axios from 'axios'

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const VOTE_POST = "VOTE_POST";
export const RECEIVE_POST = "RECEIVE_POST";
export const ADD_NEW_POSTS = 'ADD_NEW_POSTS'
export const ADD_COMMENTS = 'ADD_COMMENTS'
export const EDIT_POST = 'EDIT_POST'
export const EDIT_COMMENTS = 'EDIT_COMMENTS'
export const DELETE_POST = 'DELETE_POST'
export const DELETE_COMMENTS = 'DELETE_COMMENTS'

const API = `http://localhost:3001`;
const headers = { 'Authorization': 'carlosdelsol' };

export function fetchCategories(){
  const URL = `${API}/categories`
  const request = axios.get(URL,{headers})
  return dispatch => {
      request.then((categories)=>{
        dispatch(receiveCategories(categories.data))
      })
  }
}

export function fetchPosts(){
  const URL = `${API}/posts`
  const request = axios.get(URL,{headers})
  return dispatch => {
      request.then((posts)=>{
        dispatch(receivePosts(posts.data))
      }) 
  }
}

export function fetchPost(id){
  const URL = `${API}/posts/${id}`
  const request = axios.get(URL,{headers})
  return dispatch => {
      request.then((post)=>{
          dispatch(receivePost(post.data))
      })
  }
}

export function  fetchComments(id){
  const URL = `${API}/posts/${id}/comments`
  const request = axios.get(URL,{headers})
  return dispatch =>{
      request.then((comments)=>{
        dispatch(receiveComments(comments.data, id))
      })
  }
}

export function votePost(id,option){
  const URL = `${API}/posts/${id}`
  const request = axios.post(URL,{option},{headers})
  return dispatch => {
      request.then((post)=>{
        dispatch(updateVotePost(post.data))
      })
  }
}

export function  deletePost(id){
  return dispatch => {
    
    const URL = `${API}/posts/${id}`
    axios.delete(URL,{headers}).then(()=>
      console.log(id)
    )
  }
  
}

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
});

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const receiveComments = (posts, id) => ({
  type: RECEIVE_COMMENTS,
  posts,
  id
});

export const updateVotePost = post => ({
  type: VOTE_POST,
  post
});

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
    type: EDIT_POST, 
  }
}
export function editComments (){
  return{
    type: EDIT_COMMENTS, 
  }
}

export function deleteComments (){
  return{
    type: DELETE_COMMENTS, 
  }
}