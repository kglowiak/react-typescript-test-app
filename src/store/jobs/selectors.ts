import { AppState } from '../reducer';

export const selectJobsLoading = (state: AppState) => state.jobs.loading;
export const selectJobs = (state: AppState) => state.jobs.jobsList;
