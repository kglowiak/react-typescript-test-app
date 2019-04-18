import { createAction } from '../../utils/actions';
import { FETCH_JOB_BY_ID, FETCH_JOBS_LIST } from './consts';

export const fetchJobsList = () => createAction(FETCH_JOBS_LIST.started);

export const fetchJobInfo = (payload: string) =>
  createAction<string>(FETCH_JOB_BY_ID.started, payload);
