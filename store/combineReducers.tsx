// Packages
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers below.
import { gateSlice, IGateSlice } from 'slices';

interface IAppState {
  gate: IGateSlice;
}

// Persistence Configuration
const gatePersist = {
  key: 'gate',
  storage: storage,
  blacklist: [],
};

export const rootReducer = combineReducers<IAppState>({
  gate: persistReducer(gatePersist, gateSlice),
});

export type RootState = ReturnType<typeof rootReducer>;
