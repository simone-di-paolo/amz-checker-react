import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'; // <-- IMPORTANTE: importato da 'redux'
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import logger from 'redux-logger';

// Import dei reducer
import * as userReducer from './widget/redux/reducers/userSettings';

// Definiamo la mappa dei reducer
const reducersMap = { 
  userSettings: userReducer.userReducer 
};

// CORREZIONE: Usiamo combineReducers per creare un singolo reducer radice.
// Questo risolve l'incompatibilità di tipo con configureStore.
const rootReducer = combineReducers(reducersMap);

// --- Caricamento Dinamico delle Saghe ---
function* rootSaga(): Generator {
  const sagaModules = import.meta.glob('./widget/redux/sagas/**/*.ts', { eager: true });

  const allSagas = Object.values(sagaModules).flatMap(module =>
    Object.values(module as Record<string, unknown>)
  ).filter(
    (saga): saga is () => Generator => typeof saga === 'function'
  );

  yield all(allSagas.map(saga => saga()));
}

// Creiamo il middleware per le saghe
const sagaMiddleware = createSagaMiddleware();

// Creiamo lo store
const store = configureStore({
  reducer: rootReducer, // Ora questo è compatibile
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware, logger),
});

// Avviamo la root saga
sagaMiddleware.run(rootSaga);

// Inferiamo i tipi `RootState` e `AppDispatch` dallo store stesso
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
