// import {http} from '../../services';

// interface LoginParams {
//   username: string;
//   password: string;
// }

// interface LoginResponse {
//   token: string;
// }

// export const login = (params: LoginParams) => {
//   return http.post<LoginResponse>('auth/login', params);
  
// };

// interface GoogleLoginBody {
//   token: string;
// }

// export const googleLogin = (body: GoogleLoginBody) => { 
//  return  http.post('/auth/google/', body);}

import {http} from '../../services';

interface LoginParams {
  username: string;
  password: string;
}

interface LoginResponse {
  data:{
    accessToken: string;
  }
}

export const login = (payload: LoginParams) => {
  return http.post<LoginResponse>('/auth/login', payload);
};
