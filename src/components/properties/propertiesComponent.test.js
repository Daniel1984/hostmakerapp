import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import Properties from './propertiesComponent';

const mockData = [
    {
        owner: 'test',
        incomeGenerated: '1000',
        address: {
            line1: 'Flat 4',
            city: 'London',
            country: 'UK'
        }
    }
];

describe('<Properties />', () => {
    beforeEach(() => {
        fetch.mockResponse(JSON.stringify(mockData))
    });

    it('calls componentDidMount', () => {
        sinon.spy(Properties.prototype, 'componentDidMount');
        const wrapper = mount(<Properties />);
        expect(Properties.prototype.componentDidMount.calledOnce).toEqual(true);
    });

    it('should render just fine', () => {
        const wrapper = shallow(<Properties />);
        expect(wrapper.hasClass('properties')).toBeTruthy();
    });

    it('should contain loading element while response is not received', () => {
        const wrapper = mount(<Properties />);
        expect(wrapper.find('.properties_loading').length).toEqual(1);
    });


    it('should not contain loading element when response is received', () => {
        const wrapper = mount(<Properties />);
        wrapper.setState({ loading: false });
        expect(wrapper.find('.properties_loading').length).toEqual(0);
    });

    it('should contain table element when response is received', () => {
        const wrapper = mount(<Properties />);
        wrapper.setState({ loading: false });
        expect(wrapper.find('.properties_table').length).toEqual(1);
    });
});
