import { configureStore } from '@reduxjs/toolkit';
import userFormReduce from '../features/user/userSlice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

/**
 * Getting all our reducer and persistedReducer
 * @function react
 * @returns {reducer, persistedReducer} 
 */

const reducers = combineReducers({
  user: userFormReduce,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});
