import {createStore,applyMiddleware } from 'redux';
import rootReducer from '../Reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk,logger)// add your middlewares here
  )
}