import React from 'react';
import './ParticipantList.css'

function checkStatus(inSession, onStage) {
  if(!inSession) {
    return 'offline';
  }
  else if(onStage) {
    return 'on stage';
  }
  else {
    return 'in session';
  }
}

function ParticipantList(props) {
  return <div className="participantList">
    {props.participants.map(par => {
      return <section key={par.id} id={par.id} className="participant">
        <img src={par.avatar} className="avatar" alt="avatar" />
        <div className="info">
          <div className="name">{par.name}</div>
          <div className="status">
            <div className={par.inSession ? 'sessionOn' : 'sessionOff'}>&#11044;</div>
            <div className="statusText">
              {checkStatus(par.inSession, par.onStage)}
            </div>
          </div>
        </div>
      </section>
    })}  
  </div>
}

ParticipantList.defaultProps = {
  participants: []
}

export default ParticipantList;