import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import qrCodeReducer from './qrcodeReducer';

export const store = configureStore({
  reducer: {
    qrCode: qrCodeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
