import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { IUserData } from './types';

export const fetchUpdateUser = createAsyncThunk(
  'user/fetchUpdateUser',
  async (userData: IUserData) => {
    const { data } = await axios.put(
      `https://technical-task-api.icapgroupgmbh.com/api/table/${userData.id}`,
      userData
    );
    return data.results;
  }
);
