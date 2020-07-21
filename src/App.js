import React from 'react';
import Stage from './Stage';
import Store from './Store';

function App() {
  return (
    <main className='App'>
      <Stage participants={Store}/>
    </main>
  );
}

export default App;