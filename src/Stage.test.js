import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Stage from './Stage';
import participants from './Store';

describe('Stage testing', () => {
  //Smoke test
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Stage participants={participants}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //Smoke test
  it('renders without props without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Stage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Stage participants={participants}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
});