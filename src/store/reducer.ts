import { combineReducers } from 'redux';

import { jobs, JobsState } from './jobs/reducer';

export type AppState = {
  jobs: JobsState;
};

const reducers = { jobs };

export const rootReducer = combineReducers<AppState>(reducers);
