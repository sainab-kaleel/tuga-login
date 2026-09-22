import { Google, Apple, Facebook } from '@mui/icons-material';
import { Stack, Divider, Button } from '@mui/material';

export default function SocialLoginButtons() {
  return (
    <Stack spacing={2} sx={{ mt: 3 }}>
      <Divider>Or login with</Divider>

      <Stack direction="row" sx={{ justifyContent: 'center', gap: 2 }}>
        <Button
          sx={{ minWidth: 'auto', color: 'primary.main' }}
          aria-label="Sign in with Google"
        >
          <Google />
        </Button>
        <Button
          sx={{ minWidth: 'auto', color: 'primary.main' }}
          aria-label="Sign in with Apple"
        >
          <Apple />
        </Button>
        <Button
          sx={{ minWidth: 'auto', color: 'primary.main' }}
          aria-label="Sign in with Facebook"
        >
          <Facebook />
        </Button>
      </Stack>
    </Stack>
  );
}