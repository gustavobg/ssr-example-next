// Internal
import { appTypes } from '../../shared/utils/actions';

const counter = appTypes.defineAction('auth');

export const COUNTER = counter.defineAction('COUNTER',
  ['INCREMENT', 'DECREMENT', 'INCREMENT_ASYNC'],
);
