import React from 'react';
import { render } from 'enzyme';

import { JobItemProps, JobItem } from './index';

describe('JobItem', () => {
  const props: JobItemProps = {
    job: {
      type: 'job',
      time: 123455,
      score: 1,
      by: 'test',
      id: 123455,
      title: 'test 1',
      url: 'testurl',
    },
  };

  it('should render a component', () => {
    const wrapper = render(<JobItem {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
