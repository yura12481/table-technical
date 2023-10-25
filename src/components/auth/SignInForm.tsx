import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, TextField, Typography } from '@mui/material';

import {
  useForm,
  SubmitHandler,
  Controller,
  useFormState,
} from 'react-hook-form';

import {
  isValidPassword,
  isValidUsername,
} from '../../utils/validation/validationUtils';

import { useAppDispatch, useAppSelector } from '../../hooks/redux/hook';

import { loginUser } from '../../redux/slices/auth/asyncAction';

import { ISignInForm } from './types';

const SignInForm: React.FC = () => {
  const { handleSubmit, control, reset } = useForm<ISignInForm>();
  const { errors } = useFormState({
    control,
  });

  const { loading, error } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ISignInForm> = (data) => {
    let userCredentials = {
      username: data.username,
      password: data.password,
    };
    dispatch(loginUser(userCredentials)).then((result) => {
      if (result.payload) {
        reset();
        navigate('/');
      } else {
        reset();
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="username"
        rules={isValidUsername}
        render={({ field }) => (
          <TextField
            fullWidth
            variant="outlined"
            label="Username"
            type="text"
            margin="normal"
            onChange={(e) => field.onChange(e)}
            value={field.value || ''}
            error={!!errors.username?.message}
            helperText={errors.username?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={isValidPassword}
        render={({ field }) => (
          <TextField
            fullWidth
            variant="outlined"
            label="Password"
            type="password"
            margin="normal"
            onChange={(e) => field.onChange(e)}
            value={field.value || ''}
            error={!!errors.password?.message}
            helperText={errors.password?.message}
          />
        )}
      />
      {error && (
        <Typography variant="body1" sx={{ margin: '10px 0', color: 'red' }}>
          {error}
        </Typography>
      )}
      <Button
        fullWidth
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        onClick={() => {}}
        sx={{ height: '56px' }}
        disabled={!!errors.username || !!errors.password}
      >
        {loading ? 'Loading...' : 'Sign In'}
      </Button>
    </form>
  );
};

export default SignInForm;
