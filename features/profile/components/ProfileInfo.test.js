import { shallow } from 'enzyme';
import React from 'react';
import mockData from '../../../__mocks__/profile';
import ProfileInfo from './ProfileInfo';

describe('pages/profile', () => {
  it('renders profile with info"', () => {
    const app = shallow(<ProfileInfo profile={mockData.profileInfo1} />);
    expect(app.find('h1').text()).toEqual('Pompílio Pomposo');
  });
});
