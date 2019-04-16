import { AnyAction, Reducer } from 'redux';

import { EXAMPLE } from './consts';

export type Jobs = {
  loading: boolean;
};

export const initialState: Jobs = {
  loading: false,
};

export const jobs = (
  state = initialState,
  action: AnyAction,
): Reducer<Jobs, AnyAction> => {
  switch (action.type) {
    case EXAMPLE.started:
      return {
        loading: true,
        ...state,
      };
    case EXAMPLE.success:
      return {
        loading: false,
        ...state,
      };
    case EXAMPLE.failure:
      return {
        loading: false,
        ...state,
      };
    default:
      return state;
  }
};
