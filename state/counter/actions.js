// Internal
import { COUNTER } from './types';

export const increment = () => ({ type: COUNTER.INCREMENT });
export const decrement = () => ({ type: COUNTER.DECREMENT });
export const incrementAsync = () => ({ type: 'INCREMENT_ASYNC' });
