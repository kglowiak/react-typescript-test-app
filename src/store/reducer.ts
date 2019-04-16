import { combineReducers } from 'redux';

import { jobs } from './jobs/reducer';

const reducers = { jobs };

export const rootReducer = combineReducers(reducers);
