// Internal
import { PROFILES } from './types';

/**
 * Get profiles by id
 */
export const byId = () => ({ type: PROFILES.BY_ID });

/**
 * Get all profiles
 */
export const all = () => ({ type: PROFILES.ALL });
