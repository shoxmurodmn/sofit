import http from '../../services';

export interface LoginParams {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export const login = (payload: LoginParams) => {
  return http.post<LoginResponse>('auth/login', payload);
};
