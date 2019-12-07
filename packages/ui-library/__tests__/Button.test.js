import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from '../lib/Button';

describe('Badge', () => {
  it('should render', () => {
    const wrapper = shallow(<Button />);

    expect(wrapper.length).toBe(1);
    expect(wrapper.props().style.backgroundColor).toBe('red');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})
;