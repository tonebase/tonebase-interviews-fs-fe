import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../pages/index';


describe('<Counter /> initial rendering', () => {
  it('should render the <Counter /> component on the screen', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper).toExist();
  });

  it('should call autoUpdate on componentDidMount()', () => {
    const wrapper = shallow(<Counter />);
    const mock = jest.fn();
    wrapper.instance().autoUpdate = mock;
    wrapper.instance().forceUpdate();
    wrapper.instance().componentDidMount();

    expect(mock).toHaveBeenCalled();
  });
});