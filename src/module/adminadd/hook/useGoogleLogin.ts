import { useState } from 'react';
import * as Api from '../api';

const useGoogleLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);

  const login = async (token: string) => {
    setLoading(true);
    try {
      const response = await Api.googleLogin({ token });
      localStorage.setItem('token', response.data.accessToken);    // token saqlash
      return response.data;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export default useGoogleLogin;
