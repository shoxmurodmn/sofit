// import get from 'lodash/get'

// export const getData = item => {
//   return {
//     id: get(item, 'id'),
//     title: get(item, 'title'),
//     photo: get(item, 'file'),
//     creatdAt: get(item, 'created_time'),
//   }
// }
import http from '../../services';

interface LoginParams {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

export const login = (payload: LoginParams) => {
  return http.post<LoginResponse>('auth/login', payload);
};
