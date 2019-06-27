import { GET_POSTS, DELETE_POSTS } from '../actionTypes';

export const getPosts = () => ({
  type: GET_POSTS
});

export const deletePosts = () => ({
  type: DELETE_POSTS
});