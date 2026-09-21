// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: { main: '#4f46e5' }, // indigo/blue from your redesign
    background: { default: '#ffffff' },
  },
  typography: {
    fontFamily: 'Poppins, Roboto, sans-serif',
    h4: { fontWeight: 700 },
  },
  shape: { borderRadius: 8 },
});