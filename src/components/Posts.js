import React from 'react';
import { connect } from 'react-redux';

import { getPosts } from '../redux/actions/posts';
import ListPosts from './ListPosts';

function Posts(props) {
  console.log(props);
  return (
    <div>
      <button onClick={props.getPostsHelper}>Get posts</button>
      <ListPosts />
    </div>
  );
}

const mapStateToProps = (state) => ({ ...state.posts });

const mapDispatchToProps = (dispatch) => ({
  getPostsHelper: () => dispatch(getPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);