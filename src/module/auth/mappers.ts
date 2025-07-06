import http from '../../services';

export interface LoginParams {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export const login = async (payload: LoginParams): Promise<LoginResponse> => {
  const { data } = await http.post<LoginResponse>('auth/login', payload);
  return data;
};
