import { createSlice } from '@reduxjs/toolkit';

import { fetchUpdateUser } from './asyncAction';

import { IUserState } from './types';

const initialState: IUserState = {
  data: [],
  status: '',
};

const updateUser = createSlice({
  name: 'updateUser',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpdateUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUpdateUser.fulfilled, (state) => {
        state.status = 'success';
      })
      .addCase(fetchUpdateUser.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export default updateUser.reducer;
