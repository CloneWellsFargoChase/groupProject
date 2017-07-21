import {createStore,applyMiddleware } from 'redux';
import rootReducer from '../Reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {loadState} from './localStorage';

const persistedState = loadState();

export default function configureStore() {
  return createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunk,logger)// add your middlewares here
  )
}