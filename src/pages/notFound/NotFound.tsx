import { Container, Typography } from '@mui/material';
import React from 'react';

const NotFound: React.FC = () => {
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
        Nothing found :(
      </Typography>
    </Container>
  );
};

export default NotFound;
