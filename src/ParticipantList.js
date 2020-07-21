import React from 'react';

function ParticipantList(props) {
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

  return <div>
    {props.participants.map(par => {
      <section id={par.id} className="participant">
        <img src={par.avatar} className="avatar" />
        <div className="info">
          <div className="name">{par.name}</div>
          <div className="status">
            <div className={par.inSession ? 'sessionOn' : 'sessionOff'}>&#11044;</div>
            <div>
              {checkStatus(par.inSession, par.onStage)}
            </div>
          </div>
        </div>
      </section>
    })}  
  </div>
}

export default ParticipantList;