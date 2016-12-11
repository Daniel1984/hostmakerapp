import React from 'react';
import { shallow } from 'enzyme';
import Header from './headerComponent';

describe('<HeaderComponent />', () => {
    it('should render just fine', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.hasClass('header')).toBeTruthy();
    });

    it('should have header logo', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.contains(<div className="header_logo"></div>)).toEqual(true);
    });
});
