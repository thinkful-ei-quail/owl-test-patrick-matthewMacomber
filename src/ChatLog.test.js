import React from 'react';
import ChatLog from './ChatLog';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import messages from './ChatMessages';

describe('Testing ChatLog component', () => {
  it('Render component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatLog messages={messages}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  it('Render component without props without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatLog />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<ChatLog messages={messages}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
});