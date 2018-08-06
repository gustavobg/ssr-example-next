import { shallow } from 'enzyme';
import React from 'react';
import mockData from '../../../__mocks__/profile';
import ProfileList from './ProfileList';

describe('pages/index', () => {
  it('renders index with profile list"', () => {
    const app = shallow(<ProfileList profiles={mockData.profileList} />);
    expect(app.find('h1').text()).toEqual('Perfis');
  });
});
