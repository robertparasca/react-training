import React from 'react';
import { useDispatch } from 'react-redux';

import { getPosts, deletePosts } from '../redux/actions/posts';
import ListPosts from './ListPosts';

const Posts = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(getPosts())}>Get posts</button>
      <button onClick={() => dispatch(deletePosts())}>Delete posts</button>
      <ListPosts />
    </div>
  );
}

export default Posts;