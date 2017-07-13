import { compose, createStore } from 'redux';
import rootReducer from '../Reducers/index';

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    compose(
      // applyMiddleware(), // add your middlewares here
      /**
       * Conditionally add the Redux DevTools extension enhancer
       * if it is installed.
       */
    )

  )
}