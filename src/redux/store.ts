import { configureStore } from '@reduxjs/toolkit';

import userSlice from './slices/auth/userSlice';
import usersSlice from './slices/data/usersSlice';
import updateUserSlice from './slices/updateUser/updateUserSlice';
import filterSlice from './slices/filter/filterSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    users: usersSlice,
    updateUser: updateUserSlice,
    filter: filterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
