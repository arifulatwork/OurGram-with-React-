import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';

//import application from './reducers/application';
//import account from './reducers/account';
//import post from './reducers/post';

const reducer = combineReducers({
  //application,
  //account,
  //post
});

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export default store;
