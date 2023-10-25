import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICategory } from './types';

const initialState: ICategory = {
  offset: 1,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.offset = action.payload;
    },
  },
});

export const { setPage } = filterSlice.actions;
export default filterSlice.reducer;
