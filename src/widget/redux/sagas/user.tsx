
import { put, delay, takeLatest } from 'redux-saga/effects';
import { FETCH_USER } from '../actions/user';

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* incrementAsync() {
  yield delay(5000);
  yield put({ type: FETCH_USER._SUCCESS });
}

// Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
// Allows concurrent fetches of user.
export function* watchIncrementAsync() {
  yield takeLatest(FETCH_USER._REQUEST, incrementAsync);
}
