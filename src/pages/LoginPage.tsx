import { Grid, Box } from '@mui/material';
import LoginForm from '../components/LoginForm';
import IllustrationPanel from '../components/IllustrationPanel';
export default function LoginPage() {
  return (
    <Grid container sx={{ minHeight: '100vh' }}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box
          sx={{
            maxWidth: 380,
            mx: 'auto',
            mt: { xs: 6, md: 10 },
            px: 2,
          }}
        >
          <LoginForm />
        </Box>
      </Grid>

      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          display: { xs: 'none', md: 'flex' },
          background: 'linear-gradient(160deg, #6366f1, #c7d2fe)',
        }}
      >
        <IllustrationPanel />
      </Grid>
    </Grid>
  );
}