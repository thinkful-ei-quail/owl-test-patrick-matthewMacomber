import React from 'react';
import ParticipantList from './ParticipantList';
import Store from './Store';

function App() {
  return (
    <main className='App'>
      <ParticipantList participants={Store}/>
    </main>
  );
}

export default App;