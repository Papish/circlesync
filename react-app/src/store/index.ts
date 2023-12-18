import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './auth';

export const store = configureStore({
  reducer: {
    auth: counterSlice,
  },
  devTools: true,
});

