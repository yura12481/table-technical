import { createSlice } from '@reduxjs/toolkit';

import { fetchUsers } from './asyncAction';

import { IUsersState } from './types';

const initialState: IUsersState = {
  data: [],
  status: '',
};

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export default usersSlice.reducer;
