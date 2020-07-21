import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ParticipantList from './ParticipantList';

describe('Participant list testing', () => {
  const participants = [
    {
        id: 1,
        name: 'Koren Templeton',
        avatar:
            'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: true
    },
    {
        id: 2,
        name: 'Caty Flucker',
        avatar:
            'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: false
    },
    {
        id: 3,
        name: 'Axe Kubicka',
        avatar: 'https://robohash.org/utlaborumfugit.jpg?size=200x200&set=set1',
        inSession: false,
        onStage: false
    },
    {
        id: 4,
        name: 'Frank Runciman',
        avatar:
            'https://robohash.org/etexercitationemassumenda.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: false
    },
    {
        id: 5,
        name: 'Ashla Attwool',
        avatar:
            'https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: true
    }
];

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