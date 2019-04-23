import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import { AppState } from '../store/reducer';
import { Jobs } from './index';
import { JobsLayout } from './layout';

jest.mock('./layout', () => ({
  JobsLayout: () => <div />,
}));

const testActionType = 'TEST_ACTION';
jest.mock('../store/jobs/actions', () => ({
  fetchJobList: () => ({type: testActionType}),
}));

describe('<Jobs />', () => {
  const mockStore = configureStore();
  const initialState: AppState = { jobs: { loading: false, jobsList: [] } };
  const store = mockStore(initialState);
  const wrapper = mount(<Provider store={store}><Jobs /></Provider>);
  const layout = wrapper.find(JobsLayout);

  it('should enhance layout with props', () => {
    expect(layout.props().jobs).toBe(initialState.jobs.jobsList);
    expect(layout.props().loading).toBe(initialState.jobs.loading);
  });
});
