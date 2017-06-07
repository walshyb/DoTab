import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import ConnectedListManager, { ListManager } from '../assets/javascripts/components/list_manager/ListManager';


describe('List Manager Test', () =>{
  const initialState = {
    list_manager: {
      categories: {
        category1: {
          active: {
            'ebeb': 'Task 1',
            '2f9a': 'Task 2'
          },
          completed: {}
        }
      }
    }
  }
  const mockStore = configureStore();
  let store, container;

  beforeEach( () => {
    store = mockStore(initialState)
    container = shallow(<ConnectedListManager store={store} /> )  
  });

  it('renders correctly', () => {
    const tree = renderer.create(<ConnectedListManager store={store} />).toJSON();
    expect(tree).toMatchSnapshot();
  });



});
