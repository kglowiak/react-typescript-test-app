import { createAction } from '../../utils/actions';
import { FETCH_JOBS_LIST } from './consts';

export const fetchJobsList = () => createAction(FETCH_JOBS_LIST.started);
