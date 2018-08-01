import { loginSuccess, loginFailure, loginSubmit } from './actions';
import { LOGIN } from './types';

describe('state/auth/login/actions loginSubmit', () => {
  it('should return correct action', () => {
    const payload = { field: 'value' };
    expect(loginSubmit(payload)).toEqual({ type: LOGIN.SUBMIT, payload });
  });
});

describe('state/auth/login/actions loginSuccess', () => {
  it('should return correct action', () => {
    const payload = { status: true };
    expect(loginSuccess(payload)).toEqual({ type: LOGIN.SUCCESS, payload });
  });
});

describe('state/auth/login/actions loginFailure', () => {
  it('should return correct action', () => {
    const payload = { status: false };
    expect(loginFailure(payload)).toEqual({ type: LOGIN.FAILURE, payload });
  });
});
