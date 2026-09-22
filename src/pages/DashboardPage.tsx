import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Paper, Button } from '@mui/material';

export default function DashboardPage() {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('accessToken');
    if (!stored) {
      navigate('/');
      return;
    }
    setAccessToken(stored);
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>You're logged in</Typography>
      <Paper sx={{ p: 2, wordBreak: 'break-all', mb: 3 }}>
        {accessToken ?? 'Loading...'}
      </Paper>
      <Button variant="contained" onClick={handleLogout}>Logout</Button>
    </Box>
  );
}