import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {rootReducer} from './rootReducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['test'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [
  ...getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
  }),
  //   sagaMiddleware
];

const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

export const persistor = persistStore(store);

export default store;
