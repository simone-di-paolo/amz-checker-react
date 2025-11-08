
import { put, delay, takeLatest } from 'redux-saga/effects';
/*import { FETCH_USER } from '../actions/userSettings';

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* incrementAsync() {
  console.log('Saga Iniziata');
  yield delay(5000);
  yield put({ type: FETCH_USER._SUCCESS });
  console.log('Saga Finita');
}

// Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
// Allows concurrent fetches of user.
function* watchIncrementAsync() {
  console.log('Saga triggerato');
  yield takeLatest(FETCH_USER._REQUEST, incrementAsync);
}


export {
  watchIncrementAsync
}*/