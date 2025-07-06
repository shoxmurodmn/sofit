import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import useGoogleLogin from '../../module/auth/hook/useGoogleLogin';

export default function GoogleAuth() {
  const { login, loading } = useGoogleLogin();
  const navigate = useNavigate();

  const handleSuccess = async (credentialResponse: any) => {
    const token = credentialResponse.credential;
    try {
      const result = await login(token);
      console.log('Kirish muvaffaqiyatli:', result);
      navigate('/dashboard');
    } catch (error) {
      console.error('Google login xatosi', error);
    }
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => console.log('Kirishda xatolik')}
      />
    </div>
  );
}
