import axios from 'axios'

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const VOTE_POST = "VOTE_POST";
export const RECEIVE_POST = "RECEIVE_POST";
export const ADD_NEW_POST = 'ADD_NEW_POST'
export const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT'
export const EDIT_POST = 'EDIT_POST'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_POST = 'DELETE_POST'
export const DELETE_COMMENT = 'DELETE_COMMENT'

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

export function fetchPost(id, type){
  const URL = `${API}/${type}/${id}`
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

export function vote(type, id,option){
  const URL = `${API}/${type}/${id}`
  const request = axios.post(URL,{option},{headers})
  return dispatch => {
      request.then((post)=>{
        dispatch(updateVote(post.data))
      })
  }
}

export const remove = (type, id, callback) => dispatch => {
	var request = new Request(`${API}/${type}/${id}`, {
		method: 'DELETE',
		headers: headers
	});
	return fetch(request)	
    .then(res => res.json())
    .then((obj) => {
        if(type==="posts"){
          dispatch(removePost(obj)); 
          callback()
        }else{
          dispatch(removeComment(obj)); 
        }
  })
};

export function addPost(values, type, callback){
  const URL = `${API}/${type}`
  const request = axios.post(URL,values,{headers})
  return dispatch => {
      request.then(({data})=>{
        if(type==="posts"){
          dispatch(addNewPost(data)); 
          dispatch(fetchPosts());
          callback()
        }else{
          dispatch(addNewComment(data)); 
          dispatch(fetchComments())
        }        
      })
    }
}

export function editPost(id, values, type, callback){
  const URL = `${API}/${type}/${id}`
  const request = axios.put(URL,values,{headers})
  return dispatch => {
      request.then(({data})=>{
        if(type==="posts"){
          dispatch(updatePost(data)); 
        }else{
          dispatch(updateComment(data)); 
        }       
      })
      .then(()=>callback())
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

export const updateVote = post => ({
  type: VOTE_POST,
  post
});

export const removePost = post => ({
		type: DELETE_POST,
    	post
});

export const removeComment = comment => ({
  type: DELETE_COMMENT,
    comment
});

export const addNewPost = post => ({
    type: ADD_NEW_POST, 
    post
});

export const addNewComment = comment => ({
  type: ADD_NEW_COMMENT, 
  comment
});

export const updatePost = post => ({
  type: EDIT_POST, 
  post
});

export const updateComment = comment => ({
type: EDIT_COMMENT, 
comment
});