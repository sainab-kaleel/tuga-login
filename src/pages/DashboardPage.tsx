// src/pages/DashboardPage.tsx
import { useLocation } from 'react-router-dom';
import { Box, Typography, Paper } from '@mui/material';

export default function DashboardPage() {
  const { state } = useLocation();
  const accessToken = state?.accessToken;

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>You're logged in</Typography>
      <Paper sx={{ p: 2, wordBreak: 'break-all' }}>
        {accessToken ?? 'No access token found'}
      </Paper>
    </Box>
  );
}