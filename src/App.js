import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import store from './redux/store';

import Counter from './components/Counter';
import Posts from './components/Posts';
import Navbar from './components/Navbar';
import Users from './components/Users';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Route path='/' component={Posts} exact />
        <Route path='/counter' component={Counter} exact />
        <Route path='/users' component={Users} exact />
      </Router>
    </Provider>
  );
}

export default App;
