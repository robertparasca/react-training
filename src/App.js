import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';

import Counter from './components/Counter';
import Posts from './components/Posts';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
