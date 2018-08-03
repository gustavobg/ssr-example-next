import { shallow } from 'enzyme'
import React from 'react'
import mockData from '../__mocks__/profile';
import ProfileInfo from '../pages/profiles.js';

describe('pages/profiles', () => {
  it('renders profiles with info"', () => {
    const app = shallow(<ProfileInfo profiles={mockData.profileInfo1} />);
    expect(app.find('h1').text()).toEqual('Pompílio Pomposo')
  })
});
