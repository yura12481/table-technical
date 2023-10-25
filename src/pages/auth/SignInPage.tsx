import React from 'react';

import { Typography, Container } from '@mui/material';

import SignInForm from '../../components/auth/SignInForm';

const SignInPage: React.FC = () => {
  return (
    <Container
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h4" align="center">
        Sign In
      </Typography>
      <SignInForm />
    </Container>
  );
};

export default SignInPage;
