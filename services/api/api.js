// External
import axios from 'axios';

// Internal
import { API_URL } from '../../shared/constants/env';

const api = axios.create({
  baseURL: API_URL,
});

export default api;
