import React from 'react';
import { connect } from 'react-redux';

import { getPosts, deletePosts } from '../redux/actions/posts';
import ListPosts from './ListPosts';

function Posts(props) {
  console.log(props);
  return (
    <div>
      <button onClick={props.getPostsHelper}>Get posts</button>
      <button onClick={props.deletePostsHelper}>Delete posts</button>
      <ListPosts />
    </div>
  );
}

const mapStateToProps = (state) => ({ ...state.posts });

const mapDispatchToProps = (dispatch) => ({
  getPostsHelper: () => dispatch(getPosts()),
  deletePostsHelper: () => dispatch(deletePosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);