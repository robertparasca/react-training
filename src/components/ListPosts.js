import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { initPosts } from '../redux/actions/posts';

const ListPosts = () => {
  const dispatch = useDispatch();
  const postsState = useSelector((state) => state.posts, shallowEqual);

  useEffect(() => {
    dispatch(initPosts());
  }, []);

  return (
    <div>
      {
        postsState.loading ? 
        'Loading...' :
        <ul>
          {postsState.posts.map((post) => {
            return (<li key={post.id}>{post.title}</li>);
          })}
        </ul>
      } 
    </div>
  );
};

export default ListPosts;