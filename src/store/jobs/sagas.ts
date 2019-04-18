import { SagaIterator } from 'redux-saga/core';
import { call, put, takeLatest, takeEvery, all } from 'redux-saga/effects';

import { get } from '../../utils/axios';

import { FETCH_JOB_BY_ID, FETCH_JOBS_LIST } from './consts';

function* fetchJobsList() {
  try {
    const jobs = yield call(get, 'jobstories.json');

    yield all(jobs.map((job: string) => put({ type: FETCH_JOB_BY_ID.started, payload: job })));
    yield put({ type: FETCH_JOBS_LIST.success, payload: jobs });
  } catch (e) {
    yield put({ type: FETCH_JOBS_LIST.failure, message: e.message });
  }
}

function* fetchJobById({ payload }: any) {
  try {
    const job = yield call(get, `item/${payload}.json`);
    yield put({ type: FETCH_JOB_BY_ID.success, payload: job });
  } catch (e) {
    yield put({ type: FETCH_JOB_BY_ID.failure, message: e.message });
  }
}

export function* jobsSagas(): SagaIterator {
  yield takeLatest(FETCH_JOBS_LIST.started, fetchJobsList);
  yield takeEvery(FETCH_JOB_BY_ID.started, fetchJobById);
}
