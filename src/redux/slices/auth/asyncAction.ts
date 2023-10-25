import { createAsyncThunk } from '@reduxjs/toolkit';

import { ISignInForm } from '../../../components/auth/types';

import axios from 'axios';

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userCredentials: ISignInForm) => {
    const request = await axios.post(
      'https://technical-task-api.icapgroupgmbh.com/api/login/',
      userCredentials
    );
    const response = await request.data;
    localStorage.setItem('user', JSON.stringify(response.message));
    return response;
  }
);
