// Internal
import { appTypes } from '../../shared/utils/actions';

const profiles = appTypes.defineAction('profiles');

export const PROFILES = profiles.defineAction('PROFILES',
  ['BY_ID', 'ALL', 'FETCH_FAILURE', 'FETCH_SUCCESS', 'FETCH_SUCCESS_ALL', 'RESET'],
);
