import { all, fork } from 'redux-saga/effects';

const sagas: [] = [];

export function* rootSaga(services = {}) {
  yield all(sagas.map(saga => fork(saga, services)));
}
