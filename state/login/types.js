// Internal
import { appTypes } from '../../shared/utils/actions';
import { SUBMIT, SUCCESS, FAILURE } from '../../shared/constants/actions';

const login = appTypes.defineAction('login');

export const LOGIN = login.defineAction('LOGIN', [SUBMIT, SUCCESS, FAILURE]);

export const LOGOUT = login.defineAction('LOGOUT');
