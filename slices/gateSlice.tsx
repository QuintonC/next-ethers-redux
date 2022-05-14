// Packages
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Types
export interface IGateSlice {
  walletAddress: string;
  walletConnected: boolean;
  _persist: any;
}

export const initialState: IGateSlice = {
  walletAddress: '',
  walletConnected: false,
  _persist: '',
};

export const gateSlice = createSlice({
  name: 'wallet',
  initialState: initialState,
  reducers: {
    setWalletAddress: (state, action: PayloadAction<string>) => {
      state.walletAddress = action.payload;
    },
    setWalletConnected: (state, action: PayloadAction<boolean>) => {
      state.walletConnected = action.payload;
    },
    resetWalletReducer: _ => {
      return initialState;
    },
  },
});

export const { setWalletAddress, setWalletConnected, resetWalletReducer } =
  gateSlice.actions;

export default gateSlice.reducer;
