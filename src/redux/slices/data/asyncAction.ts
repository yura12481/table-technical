import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { IFetchParams } from './types';

export const fetchUsers = createAsyncThunk(
  'user/fetchUsers',
  async (params: IFetchParams) => {
    const { data } = await axios.get(
      `https://technical-task-api.icapgroupgmbh.com/api/table/?limit=8&offset=${params.offset}`
    );
    return data.results;
  }
);
