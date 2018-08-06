// Internal
import { appTypes } from '../../shared/utils/actions';

const profile = appTypes.defineAction('profile');

// eslint-disable-next-line import/prefer-default-export
export const PROFILE = profile.defineAction('PROFILE',
  ['BY_ID', 'ALL', 'FETCH_FAILURE', 'FETCH_SUCCESS', 'FETCH_SUCCESS_ALL', 'RESET'],
);
