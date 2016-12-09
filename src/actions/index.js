import axios from 'axios';

export const GET_POSTS = 'GET_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const GET_SINGLE_POST = 'GET_SINGLE_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=rvarela11';


export function getPosts () {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: GET_POSTS,
    payload: request
  };
}

export function createPost (props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);
  return {
    type: CREATE_POST,
    payload: request
  }
}

export function getSinglePost (id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type: GET_SINGLE_POST,
    payload: request
  }
}

export function deletePost (id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type: DELETE_POST,
    payload: request
  }
}
