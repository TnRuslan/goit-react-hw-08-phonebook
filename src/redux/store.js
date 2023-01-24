import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { ContactsReducer } from './contactsSlice';
import { authReduser } from './auth/auth.slice';

const authPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: 'token',
};

export const store = configureStore({
  reducer: {
    myContacts: ContactsReducer,
    user: persistReducer(authPersistConfig, authReduser),
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
