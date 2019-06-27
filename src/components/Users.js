import React, { useEffect, useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { getUsers } from '../redux/actions/users';

const Users = () => {
  const dispatch = useDispatch();
  const usersState = useSelector((state) => state.users, shallowEqual);

  return (
    <div>
      <button onClick={() => dispatch(getUsers())}>Get users</button>
      <ul>
        {
          usersState.loading ? 
          'Loading' :
          usersState.users.map((user) => {
            return (<li key={user.name}>{user.name}</li>)
          })
        }
      </ul>
    </div>
  );
};

export default Users;