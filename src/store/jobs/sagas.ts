import { SagaIterator } from 'redux-saga/core';
import { call, put, takeLatest } from 'redux-saga/effects';

import { post } from '../../utils/axios';

import { EXAMPLE } from './consts';

function* exampleSaga({ payload }: any) {
  try {
    const request = yield call(post, 'endpoint', payload);
    yield put({ type: EXAMPLE.success, payload: request });
  } catch (e) {
    yield put({ type: EXAMPLE.failure, message: e.message });
  }
}

export function* jobsSagas(): SagaIterator {
  yield takeLatest(EXAMPLE.started, exampleSaga);
}
