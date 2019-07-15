import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import DashboardPage from './DashboardPage';
import LoginPage from './LoginPage';

const RootPage = () => {
  const authState = useSelector((state) => state.auth, shallowEqual);

  if (authState.isAuthenticated) {
    return <DashboardPage />;
  }

  return <LoginPage />;
};

export default RootPage;