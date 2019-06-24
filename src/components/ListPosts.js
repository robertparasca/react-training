import React from 'react';
import { connect } from 'react-redux';

function ListPosts(props) {
  return (
    <div>
      {
        props.loading ? 
        'Loading...' :
        <ul>
          {props.posts.map(post => {
            return (<li key={post.id}>{post.title}</li>);
          })}
        </ul>
      } 
    </div>
  );
}

const mapStateToProps = (state) => ({ ...state.posts });

export default connect(mapStateToProps, null)(ListPosts);