

// src/components/SocialLogin.tsx
import { Stack, Typography, Divider, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../firebase/auth';

export default function SocialLogin() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const { accessToken } = await signInWithGoogle();
      navigate('/dashboard', { state: { accessToken } });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Stack spacing={2} sx={{ mt: 4 }} alignItems="center">
      <Divider sx={{ width: '100%' }}>Or login with</Divider>
      <Stack direction="row" spacing={3}>
        <Link component="button" onClick={handleGoogleLogin}>Google</Link>
        <Link component="button">Apple</Link>
        <Link component="button">Facebook</Link>
      </Stack>
    </Stack>
  );
}