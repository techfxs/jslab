import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export const Header: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        height: '50px',
      }}
    >
      <Typography sx={{ minWidth: 100 }}>Core</Typography>
      <Divider orientation="vertical" flexItem variant="middle" />
      <Typography sx={{ minWidth: 100 }}>Use-Cases</Typography>
      <Divider orientation="vertical" flexItem variant="middle" />
      <Typography sx={{ minWidth: 100 }}>Profile</Typography>
      <Divider orientation="vertical" flexItem variant="middle" />
      <Typography sx={{ minWidth: 100 }}>Chat</Typography>
    </Box>
  );
};
