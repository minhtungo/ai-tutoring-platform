import { env } from '@/config/env';
import { refreshToken } from '@/features/auth/api/refresh-token';
import { authStore } from '@/store/auth-store';
import Axios, { type AxiosError, type InternalAxiosRequestConfig } from 'axios';

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    const accessToken = authStore.getState().state.token;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  }

  return config;
}

const baseAxiosConfig = {
  baseURL: env.API_URL,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
  },
};

export const baseApi = Axios.create(baseAxiosConfig);

export const api = Axios.create(baseAxiosConfig);

api.interceptors.request.use(authRequestInterceptor);

type CustomAxiosRequestConfig = InternalAxiosRequestConfig & {
  sent?: boolean;
};

api.interceptors.response.use(
  (response) => response.data,
  async (error: AxiosError) => {
    const prevRequest = error.config as CustomAxiosRequestConfig;

    if (error.response?.status === 401 && prevRequest && !prevRequest.sent) {
      prevRequest.sent = true;
      try {
        const response = await refreshToken();
        const newAccessToken = response?.data.accessToken;
        authStore.setState((state) => ({
          ...state,
          state: { ...state.state, token: newAccessToken },
        }));
        prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(prevRequest);
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
