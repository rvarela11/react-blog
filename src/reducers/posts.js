import { GET_POSTS } from '../actions/index';
const INITIAL_STATE = { allPosts: [], singlePost: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
}
