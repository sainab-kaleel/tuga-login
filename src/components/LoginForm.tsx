import { useState } from 'react';
import { Box, Typography, TextField, Button, Stack } from '@mui/material';
export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Box>
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
    fullWidth
  />

  {/* Password TextField */}
  <TextField
    label="Password"
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    fullWidth
  />

  {/* Login button */}
  <Button variant="contained" fullWidth>
    Login
  </Button>
  </Stack>
    </Box>
  );
}