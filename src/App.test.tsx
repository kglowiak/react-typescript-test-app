import React from 'react';
import { render } from 'enzyme';

import { App } from './App';

jest.mock('./Jobs/index', () => ({
  Jobs: () => <div />,
}));

describe('<App />', () => {
  it('should render component', () => {
    const component = render(<App />);
    expect(component).toMatchSnapshot();
  });
});
