type ActionType = {
  failure: string;
  success: string;
  started: string;
};

export const createActionType = (type: string): ActionType => ({
  failure: `${type}_FAILURE`,
  success: `${type}_SUCCESS`,
  started: `${type}_STARTED`,
});
