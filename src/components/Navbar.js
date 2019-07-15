import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const authState = useSelector((state) => state.auth, shallowEqual);
  return (
    <section>
      <ul>
        <li><Link to='/'>Home</Link></li>
        {authState.isAuthenticated ? null : <li><Link to='/login'>Login</Link></li>}
        {authState.isAuthenticated ? <li><Link to='/requests'>Requests</Link></li> : null}
      </ul>
    </section>
  );
};

export default Navbar;