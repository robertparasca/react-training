import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

const ListPosts = () => {
  const postsState = useSelector((state) => state.posts, shallowEqual);

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
}

export default ListPosts;