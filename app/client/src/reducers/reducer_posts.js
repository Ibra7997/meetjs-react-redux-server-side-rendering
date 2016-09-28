import {
  FETCH_POSTS_INIT, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE,
  FETCH_POST_INIT, FETCH_POST_SUCCESS, FETCH_POST_FAILURE, RESET_ACTIVE_POST,
} from '../actions/posts';


const INITIAL_STATE = {
  postsList: {
    posts: [], error: null, loading: false,
  },
  activePost: {
    post: null, error: null, loading: false,
  },
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS_INIT:
      return { ...state, postsList: { posts: null, error: null, loading: true } };
    case FETCH_POSTS_SUCCESS:
      return { ...state, postsList: { posts: action.payload, error: null, loading: false } };
    case FETCH_POSTS_FAILURE:
      return { ...state, postsList: { posts: [], error: action.payload, loading: false } };

    case FETCH_POST_INIT:
      return { ...state, activePost: { post: null, error: null, loading: true } };
    case FETCH_POST_SUCCESS:
      return { ...state, activePost: { post: action.payload, error: null, loading: false } };
    case FETCH_POST_FAILURE:
      return { ...state, activePost: { post: null, error: action.payload, loading: false } };
    case RESET_ACTIVE_POST:
      return { ...state, activePost: { post: null, error: null, loading: false } };

    default:
      return state;
  }
}
