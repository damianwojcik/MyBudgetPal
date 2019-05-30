import React from 'react';
import { configure, full } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Diary } from './Diary';
import Entry from '../../components/Entry';

configure({ adapter: new Adapter() });

describe('<Diary />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = full(<Diary onFetchEntries={() => {}} />);
  });

  // not working
  xit('should render two <Entry /> component when receiving two entry objects in props', () => {
    wrapper.setProps({
      entries: [
        {
          amount: '5335',
          title: 'qweqwe',
          type: 'qweqwe',
          id: '-L_sZJowU0NnfiMuIe6v',
        },
        {
          amount: '215521521',
          title: 'qwrqwrwq',
          type: 'rqwrqwr',
          id: '-L_w4o97I46v-gTw5vmu',
        },
      ],
    });
    expect(wrapper.find(Entry)).toHaveLength(2);
  });
});
