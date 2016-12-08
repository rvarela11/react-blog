import axios from 'axios';

export const GET_POSTS = 'GET_POSTS';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=rvarela11';


export function getPosts () {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: GET_POSTS,
    payload: request
  };
}
