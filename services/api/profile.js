// External
import MockAdapter from 'axios-mock-adapter';
import mockData from '../../__mocks__/profile';

// Internal
import api from './api';

const mock = new MockAdapter(api);

mock.onGet('/profile/1/').reply(200, mockData.profileInfo1);
mock.onGet('/profile/2/').reply(200, mockData.profileInfo2);
mock.onGet('/profileList/').reply(200, mockData.profileList);

export const byId = id => api.get(`/profile/${id}/`);
export const all = () => api.get('/profileList/');
