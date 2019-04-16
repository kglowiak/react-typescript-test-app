import { SagaIterator } from '@redux-saga/core';
import { all, fork } from 'redux-saga/effects';

import { jobsSagas } from './jobs/sagas';

const sagas: SagaIterator[] = [jobsSagas];

export function* rootSaga(services = {}) {
  yield all(sagas.map(saga => fork(saga, services)));
}
