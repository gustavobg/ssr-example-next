// External
import MockAdapter from 'axios-mock-adapter';

// Internal
import api from './api';

const mock = new MockAdapter(api);

mock.onPost('/usuarios/login/').reply(200, {
  token: 'TITM7YTQkLfehr0ZgoGM21wx6c0gOQ2V',
});

export const authenticate = (email, password) =>
  api.post('/usuarios/login/', { email, password });