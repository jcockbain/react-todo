import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

describe('<Header />', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toHaveLength(1);
  });
});
