import React from 'react';
import {render, shallow} from 'enzyme';
import { JobsProps } from './index';
import { JobsLayout } from './layout';

describe('JobsLayout', () => {
  const props: JobsProps = {
    fetchJobs: jest.fn(),
    jobs: [
      {
        type: 'job',
        time: 123455,
        score: 1,
        by: 'test',
        id: 123455,
        title: 'test 1',
        url: 'testurl',
      },
    ],
    loading: false,
  };

  it('should call fetchJobs once on component mount', () => {
    const wrapper = shallow(<JobsLayout {...props} />);
    expect(props.fetchJobs).toHaveBeenCalledTimes(1);
  });

  it('should render a component in loading state', () => {
    const wrapper = render(<JobsLayout {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a component in loading state', () => {
    const wrapper = render(<JobsLayout {...props} loading={false}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
