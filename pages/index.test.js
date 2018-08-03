import { shallow } from 'enzyme'
import React from 'react'
import mockData from '../__mocks__/profile';
import Index from '../pages/index.js';

describe('pages/index', () => {
  it('renders index with profile list"', () => {
    const app = shallow(<Index profiles={mockData.profileList} />);
    expect(app.find('h1').text()).toEqual('Perfis')
  })
});
