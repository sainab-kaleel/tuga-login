// src/components/IllustrationPanel.tsx
import illustration from '../assets/illustration.svg';
import { Box, Typography, IconButton } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function IllustrationPanel() {
  return (
    <Box sx={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 4 }}>
      <IconButton sx={{ position: 'absolute', top: 24, left: 24, bgcolor: 'white' }}>
        <ChevronRightIcon />
      </IconButton>

      <Box
        component="img"
        src={illustration}
        alt="task management illustration"
        sx={{ maxWidth: 340, width: '100%' }}
      />

      <Typography variant="h6" color="white" sx={{ textAlign: 'center', fontWeight: 700, mt: 3 }}>
        Make your work easier and organized with Tuga's App
      </Typography>

      <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
        {[0, 1, 2].map((i) => (
          <Box key={i} sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: i === 1 ? 'white' : 'rgba(255,255,255,0.4)' }} />
        ))}
      </Box>
    </Box>
  );
}