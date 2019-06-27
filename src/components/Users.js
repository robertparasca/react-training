import React from 'react';
import { connect } from 'react-redux';

import { getUsers } from '../redux/actions/users';

function Users(props) {
  console.log(props)
  return (
    <div>
      <button onClick={props.getUsersHelper}>Get users</button>
      <ul>
        {
          props.loading ? 
          'Loading' :
          props.users.map((user) => {
            return (<li key={user.name}>{user.name}</li>)
          })
        }
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({ ...state.users });

const mapDispatchToProps = (dispatch) => ({
  getUsersHelper: () => dispatch(getUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);