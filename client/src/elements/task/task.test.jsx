import React from 'react';
import { shallow } from 'enzyme';
import Task from './task';

const task = {
  description: 'testTask',
  completed: false,
};

const testProps = { task };

describe('<Task />', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<Task {...testProps} />);
    expect(wrapper).toHaveLength(1);
  });
});
