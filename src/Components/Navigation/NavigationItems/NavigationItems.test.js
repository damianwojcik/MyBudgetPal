import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({ adapter: new Adapter() });

describe('<NavigationItems />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    });

    it('should have a NavigationItems class', () => {
        expect(wrapper.find('.NavigationItems')).toHaveLength(1);
    });

    it('should render four <NavigationItem /> elements', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(4);
    });

    it('should contain "Diary" NavigationItem', () => {
        expect(wrapper.contains(<NavigationItem link="/diary">Diary</NavigationItem>)).toEqual(true);
    });
});
