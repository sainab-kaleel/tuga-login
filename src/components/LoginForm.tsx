import SocialLoginButtons from './SocialLoginButtons';
import { useState, type FormEvent } from 'react';
import { Box, Typography, TextField, Button, Stack, Link } from '@mui/material';
export default function LoginForm() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');     
const [emailError, setEmailError] = useState('');
const [passwordError, setPasswordError] = useState('');
const handleSubmit = (event: FormEvent) => {
  event.preventDefault();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    setEmailError('Please enter a valid email');
  } else {
    setEmailError('');
  }

  if (password.length < 6) {
    setPasswordError('Password must be at least 6 characters');
  } else {
    setPasswordError('');
  }

  console.log('submitted', email, password);
};
  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography  variant="h4">Welcome back!</Typography>

      <Typography  variant="body2">
       Simplify your workflow and boost your productivity with Tuga's App
      </Typography>
      <Stack spacing={2} sx={{ mt: 3 }}>

  {/* Username TextField */}
  <TextField
    label="Username"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    error={!!emailError}
    helperText={emailError}
    fullWidth
  />

  {/* Password TextField */}
  <TextField
    label="Password"
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    error={!!passwordError}
    helperText={passwordError}
    fullWidth
  />

  {/* Login button */}
  <Button type="submit" variant="contained" fullWidth>
  Login
</Button>

  <Link
  href="#"
  underline="hover"
  sx={{ alignSelf: 'flex-end', fontSize: 14 }}
>
  Forgot Password?
</Link> 
<SocialLoginButtons />
  </Stack>
    </Box>
  );
}