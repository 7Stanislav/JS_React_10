import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <ThemeToggle />
      </div>
    </Provider>
  );
};

export default App;
