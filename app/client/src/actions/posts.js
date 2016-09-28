import fetch from 'isomorphic-fetch';


export const FETCH_POSTS_INIT = 'FETCH_POSTS_INIT';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const FETCH_POST_INIT = 'FETCH_POST_INIT';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';
export const RESET_ACTIVE_POST = 'RESET_ACTIVE_POST';

const ROOT_URL = 'http://localhost:3000/api';

export function fetchPostsInit() {
  return {
    type: FETCH_POSTS_INIT,
  };
}

export function fetchPostsSuccess(posts) {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
}

export function fetchPostsFailure(error) {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
}

export function fetchPosts() {
  return function fetchPostsDispatch(dispatch) {
    dispatch(fetchPostsInit());

    return fetch(`${ROOT_URL}/posts`).then(
      posts => dispatch(fetchPostsSuccess(posts.json())),
      error => dispatch(fetchPostsFailure(error))
    );
  };
}

export function fetchPostInit() {
  return {
    type: FETCH_POST_INIT,
  };
}

export function fetchPostSuccess(post) {
  return {
    type: FETCH_POST_SUCCESS,
    payload: post,
  };
}

export function fetchPostFailure(error) {
  return {
    type: FETCH_POST_FAILURE,
    payload: error,
  };
}

export function resetActivePost() {
  return {
    type: RESET_ACTIVE_POST,
  };
}

export function fetchPost(id) {
  return function fetchPostDispatch(dispatch) {
    dispatch(fetchPostInit());

    return fetch(`${ROOT_URL}/posts/${id}`).then(
      post => dispatch(fetchPostSuccess(post.json())),
      error => dispatch(fetchPostFailure(error))
    );
  };
}
