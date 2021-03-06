import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ParticipantList from './ParticipantList';
import participants from './Store';

describe('Participant list testing', () => {
  //Smoke test
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ParticipantList participants={participants}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //Smoke test
  it('renders without props without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ParticipantList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<ParticipantList participants={participants}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
});