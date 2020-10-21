import React from 'react';

import { CounterProvider  } from './contexts/CounterContext'

import First from './components/First'
import Second from './components/Second'

import './App.css';

function App() {
  return (
    <CounterProvider>
      <div className="App">
        <header className="App-header">
          <First />
          <Second />
        </header>
      </div>
    </CounterProvider>
  );
}

export default App;
