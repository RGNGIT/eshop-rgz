import axios from 'axios';
import { apiUrl } from '../config';

export const apiClient = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default apiClient;