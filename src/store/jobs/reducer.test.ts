import { FETCH_JOB_BY_ID, FETCH_JOBS_LIST } from './consts';
import { Job } from './models';
import { jobs, JobsState } from './reducer';

describe('jobs reducer', () => {
  const initialState: JobsState = {
    loading: false,
    jobsList: [],
  };

  const jobMock: Job = {
    type: 'job',
    time: 123455,
    score: 1,
    by: 'test',
    id: 123455,
    title: 'test 1',
    url: 'testurl',
  };

  const reducerCases = [
    {
      action: {
        type: FETCH_JOBS_LIST.started,
        payload: {},
      },
      expectedState: { ...initialState, loading: true },
    },
    {
      action: {
        type: FETCH_JOBS_LIST.success,
        payload: {},
      },
      changedProperties: {
        loading: true,
      },
      expectedState: { ...initialState, loading: false },
    },
    {
      action: {
        type: FETCH_JOBS_LIST.failure,
        payload: {},
      },
      changedProperties: {
        loading: true,
      },
      expectedState: { ...initialState, loading: false },
    },
    {
      action: {
        type: FETCH_JOB_BY_ID.success,
        payload: jobMock,
      },
      expectedState: {
        ...initialState,
        jobsList: [...initialState.jobsList, jobMock],
      },
    },
  ];

  reducerCases.map(reducerCase => {
    it(`should return expected state for action of type ${
      reducerCase.action.type
    }`, () => {
      const result = jobs(
        { ...initialState, ...reducerCase.changedProperties },
        reducerCase.action,
      );
      expect(result).toEqual(reducerCase.expectedState);
    });
  });
});
