import {applyMiddleware, createStore, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import demoReducer from './reducers/demoReducer';

const rootReducers = combineReducers({
  // demo is name to use with state for demoReducer
  // to get state from  demoReducer you must using like this
  // demo.name of Key
  // ex : demo.users
  // where users using in demoAction
  demo: demoReducer,
});

const initialState = {};

const middleWare = [thunk];

const configureStore = () =>
  createStore(rootReducers, initialState, applyMiddleware(...middleWare));

export default configureStore;
