import { call, put, all } from 'redux-saga/effects';

import { get } from '../../utils/axios';
import { FETCH_JOB_BY_ID } from './consts';
import { fetchJobById, fetchJobsList } from './sagas';

jest.mock('../../utils/axios', () => ({
  get: jest.fn(),
}));

describe('jobs sagas', () => {
  describe('fetchJobsList', () => {
    const returnPayload = [123456, 123455];
    const testGenerator = fetchJobsList();

    it('should perform an endpoint call to get a list and than put actions with jobs details', () => {
      expect(testGenerator.next().value).toEqual(call(get, 'jobstories.json'));

      expect(testGenerator.next(returnPayload).value).toEqual(
        all(
          returnPayload.map((job: number) =>
            put({ type: FETCH_JOB_BY_ID.started, payload: job }),
          ),
        ),
      );
    });
  });

  describe('fetchJobById', () => {
    const payload = 123456;
    const testGenerator = fetchJobById({ payload });

    it('should perform an endpoint call', () => {
      expect(testGenerator.next().value).toEqual(
        call(get, `item/${payload}.json`),
      );
    });
  });
});
