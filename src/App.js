import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import store from './redux/store';

import Navbar from './components/Navbar';
import Users from './components/Users';

import RootPage from './pages/RootPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Route path='/' component={RootPage} exact />
        <Route path='/login' component={LoginPage} exact />
        <Route path='/dashboard' component={DashboardPage} exact />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
