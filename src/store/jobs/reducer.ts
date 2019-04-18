import { Action } from '../../utils/actions';

import { FETCH_JOB_BY_ID, FETCH_JOBS_LIST } from './consts';
import { Job } from './models';

export type JobsState = {
  loading: boolean;
  jobsList: Job[];
};

export const initialState: JobsState = {
  loading: false,
  jobsList: [],
};

export const jobs = (state = initialState, action: Action): JobsState => {
  switch (action.type) {
    case FETCH_JOBS_LIST.started:
      return {
        ...state,
        loading: true,
      };
    case FETCH_JOBS_LIST.success:
      return {
        ...state,
        loading: false,
      };
    case FETCH_JOBS_LIST.failure:
      return {
        ...state,
        loading: false,
      };
    case FETCH_JOB_BY_ID.success:
      return {
        ...state,
        jobsList: [
          ...state.jobsList,
          action.payload,
        ]
      };
    default:
      return state;
  }
};
