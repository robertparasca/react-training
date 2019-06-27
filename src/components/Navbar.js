import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/counter'>Counter</Link></li>
        <li><Link to='/users'>Users</Link></li>
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);