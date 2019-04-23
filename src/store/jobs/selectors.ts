import { AppState } from '../reducer';
import {Job} from "./models";

export const selectJobsLoading = (state: AppState): boolean => state.jobs.loading;
export const selectJobs = (state: AppState): Job[] => state.jobs.jobsList;
