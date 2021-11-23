import React from 'react';
import { Todo } from './components';
import Provider from './components/Provider';

function App() {
  return (
    <div className="App">
      <Provider>
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
