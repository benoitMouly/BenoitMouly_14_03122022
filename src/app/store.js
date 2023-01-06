// import { configureStore } from '@reduxjs/toolkit'
// import userFormReduce from '../features/user/userSlice'
// import storage from 'redux-persist/lib/storage';
// import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import thunk from 'redux-thunk';

// /**
//  * Getting all our reducer
//  * @function react
//  * @returns {reducer} 
//  */

// export const store = configureStore({
//   reducer: {
//     user: userFormReduce,
//     // birthdate: userDateReduce
//   },
// })

// const persistor = persistStore(store);

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);


import { configureStore } from '@reduxjs/toolkit';
import userFormReduce from '../features/user/userSlice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

// import counterReducer from '../features/counter/counterSlice';

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

// export  store;