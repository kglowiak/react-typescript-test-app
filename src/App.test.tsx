import React from 'react';
import { render } from 'enzyme';

import { App } from './App';

describe('<App />', () => {
  it('should render component', () => {
    const component = render(<App />);
    expect(component).toMatchSnapshot();
  });
});
