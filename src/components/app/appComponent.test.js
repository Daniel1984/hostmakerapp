import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './appComponent';
import Header from '../common/header/headerComponent';

describe('<App />', () => {
    it('should render just fine', () => {
        const wrapper = shallow(<App children={<p>test</p>} />);
        expect(wrapper.hasClass('app')).toBeTruthy();
    });

    it('should contain <Header /> component', () => {
        const wrapper = mount(<App children={<p>test</p>} />);
        expect(wrapper.contains(<Header />)).toBeTruthy();
    });

    it('should render child components passed cia params', () => {
        const wrapper = mount(<App children={<p>test</p>} />);
        expect(wrapper.contains(<p>test</p>)).toBeTruthy();
    });
});
