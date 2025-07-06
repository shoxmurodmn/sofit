import axios from 'axios';
import config from '../i18n/config';

const Http = axios.create({
  baseURL: config.api.baseUrl, // https://dummyjson.com
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

Http.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  // faqat login emas bo‘lsa, token qo‘sh
  if (token && config.headers && !config.url?.includes('/auth/login')) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

Http.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 401) {
      console.error('401: Unauthorized');
    } else if (status === 403) {
      console.error('403: Forbidden');
    } else if (status === 500) {
      console.error('500: Server Error');
    }

    return Promise.reject(error);
  }
);

export default Http;
