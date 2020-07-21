import React from 'react';
import bar from './bar.png';
import './Stage.css';


function isOnStage(par) {
  if (par.onStage) {
    return <section key={par.id} className="UserStage">
        <div className="user-box">
          <div>{par.name}</div>
          <svg height="10" width="200">
            <line x1="0" y1="0" x2="200" y2="0"/>
          </svg>
          <div><span role="img" aria-label="Speaker Emoji">&#128266;</span><span role="img" aria-label="Magnifiying Glass">&#128269;</span></div>
        </div>
        <img src={par.avatar} alt="Avatar"></img>
      </section>
  }
  return '';
}

const user = {avatar: 'anAvatar.jpg'};

function Stage(props) {
  return <div className="wrapper">
    <div className="stage">
    {props.participants.map(par => {
      return isOnStage(par);
    })}
    </div>
    <div className="current-user-wrapper">
    <div className="current-user">
      <svg height="10" width="200">
          <line x1="0" y1="0" x2="200" y2="0"/>
        </svg>
      <img src='https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1' alt="Avatar" />
    </div>
    </div>
  </div>
}

Stage.defaultProps = {
  participants: []
}

export default Stage;