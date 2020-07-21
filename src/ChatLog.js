import React from 'react';
import store from './Store';

function findUser(id) {
  return store.find(user => user.id === id);
}

function printMessage(chatObj) {
  const user = findUser(chatObj.participantId);
  let message = '';
  switch(chatObj.type) {
    case 'message':
      return <div key={chatObj.timestamp}>
      <div>
      <img src={user.avatar} alt="avatar"/>
      <h3>${user.name}</h3>
      {new Date(chatObj.timestamp).toLocaleTimeString('en-US')}
    </div>
      {chatObj.message}
    </div>;
    case 'thumbs-up':
      message = `${user.name} gave a thumbs up &#128077;`;
    break;
    case 'thumbs-down':
      message = `${user.name} gave a thumbs down &#128078;`;
      break;
    case 'raise-hand':
      message = `${user.name} raised their hand &#9995;`;
      break;
    case 'clap':
      message = `${user.name} clapped &#128079;`;
      break;
    case 'join':
      message = `${user.name} joined`;
      break;
    case 'leave':
      message = `${user.name} left`;
      break;
    case 'join-stage':
      message = `${user.name} joined the stage`;
      break;
    case 'leave-stage':
      message = `${user.name} left the stage`;
      break;
    default :
      return '';
  }
  return <div key={chatObj.timestamp}>
    {message}
    </div>;
}

function ChatLog(props) {

  return <section className="chat-log">
    {props.messages.map(message => {
      return printMessage(message);
    })}
  </section>;
}

ChatLog.defaultProps = {
  messages: []
};

export default ChatLog;