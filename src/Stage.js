import React from 'react';


function isOnStage(par) {
  if (par.onStage) {
    return <section key={par.id} className="UserStage">
        <div>
          <div>{par.name}</div>
          <div><img src="volumeline.jpg" alt="Mic level bar"/></div>
          <div><span role="img" aria-label="Speaker Emoji">&#128266;</span><span role="img" aria-label="Magnifiying Glass">&#128269;</span></div>
        </div>
        <img src={par.avatar} alt="Avatar"></img>
      </section>
  }
  return '';
}

const user = {avatar: 'anAvatar.jpg'};

function Stage(props) {
  return <div className="Stage">
    <div>
    {props.participants.map(par => {
      return isOnStage(par);
    })}
    </div>
    <div>
      <img src="volumeline.jpg" alt="Mic level bar"/>
      <img src={user.avatar} alt="Avatar" />
    </div>
  </div>
}

Stage.defaultProps = {
  participants: []
}

export default Stage;