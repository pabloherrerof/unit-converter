import { configureStore } from '@reduxjs/toolkit';
import savedSlice from '../features/savedSlice';


export const store = configureStore({
  reducer: {
    saved: savedSlice,
  },
});
