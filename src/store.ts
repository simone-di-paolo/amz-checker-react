import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import logger from 'redux-logger';

// --- Import dei tuoi Reducer e Saga ---
import * as userReducer from './widget/redux/reducers/user';
import { watchIncrementAsync } from './widget/redux/sagas/user';

// 1. Definizione dei Reducers
const rootReducer = { user: userReducer.userReducer };

// 2. Definizione della Root Saga
function* rootSaga(): Generator {
  yield all([watchIncrementAsync()]);
}

// 3. Creazione del Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// 4. Configurazione dello Store
const store = configureStore({
  reducer: rootReducer,
  // Questa è la sintassi "fluent" o "concatenata" raccomandata da Redux Toolkit.
  // Evita problemi di tipo restituendo direttamente il risultato finale.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false, // Ottima scelta, previene errori con Redux-Saga
    })
    // @ts-ignore - Concatena sia saga che logger in un unico passaggio
    .concat(sagaMiddleware, logger),

  // devTools: true è una buona pratica per essere espliciti
  devTools: true,
});

// 5. Esecuzione della Root Saga
sagaMiddleware.run(rootSaga);

// 6. Inferenza e Export dei Tipi
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
