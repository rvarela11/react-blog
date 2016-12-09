import { GET_POSTS, GET_SINGLE_POST } from '../actions/index';
const INITIAL_STATE = { all: [], post: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_SINGLE_POST:
      return { ...state, post: action.payload.data };
    case GET_POSTS:
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
}
