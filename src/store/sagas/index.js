import { all, fork } from 'redux-saga/effects';
import authSaga from './authSaga';

export function* rootSaga() {
    yield all([
        fork(authSaga),
    ]);
}