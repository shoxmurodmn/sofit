import { useState } from 'react';
import * as Api from '../api';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const doLogin = async (username: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const { data } = await Api.login({ username, password });
      const token = data.data.accessToken;
      console.log('✅ Token:', token);

      localStorage.setItem('token', token);
    } catch (err: any) {
      console.error('Login xatosi:', err);
      setError(err.response?.data?.message || 'Noto‘g‘ri login yoki parol');
    } finally {
      setLoading(false);
    }
  };

  return { doLogin, loading, error };
};

export default useLogin;
