import React from 'react';

import { Container, Typography } from '@mui/material';

const LoadingComponent: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography
        sx={{
          fontSize: '50px',
          fontWeight: '500',
          color: '#3A415C',
          textAlign: 'center',
          marginTop: '50px',
        }}
      >
        Loading...
      </Typography>
    </Container>
  );
};

export default LoadingComponent;
