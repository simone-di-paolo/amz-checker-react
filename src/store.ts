import { configureStore, Middleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import logger from 'redux-logger';
import * as userReducer from './widget/redux/reducers/user';
import { watchIncrementAsync } from './widget/redux/sagas/user';

// Define your reducers here
const rootReducer = { user: userReducer.userReducer };

// Define your sagas here
function* rootSaga(): Generator {
  yield all([watchIncrementAsync()]);
}

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Define the middleware array
const middleware: Middleware[] = [sagaMiddleware];

// Add the logger middleware only in development
if (process.env.NODE_ENV !== 'production') {
  // @ts-ignore
  middleware.push(logger);
}

// Create the store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(middleware),
});

// Run the root saga
sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
