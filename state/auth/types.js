// Internal
import { appTypes } from '../../shared/utils/actions';

const authentication = appTypes.defineAction('auth');

export const AUTH = authentication.defineAction('AUTHENTICATION',
  ['AUTHORIZE', 'UNAUTHORIZE', 'SET_TOKEN', 'REMOVE_TOKEN'],
);
