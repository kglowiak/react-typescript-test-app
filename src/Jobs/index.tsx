import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchJobsList } from '../store/jobs/actions';
import { Job } from '../store/jobs/models';
import { selectJobs, selectJobsLoading } from '../store/jobs/selectors';
import { AppState } from '../store/reducer';
import { JobsLayout } from './layout';

export type JobsProps = StateProps & DispatchProps;

type StateProps = {
  jobs: Job[];
  loading: boolean;
};

const mapStateToProps = (state: AppState): StateProps => ({
  jobs: selectJobs(state),
  loading: selectJobsLoading(state),
});

type DispatchProps = {
  fetchJobs: () => void;
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      fetchJobs: fetchJobsList,
    },
    dispatch,
  );

export const Jobs = connect<StateProps, DispatchProps, {}>(
  mapStateToProps,
  mapDispatchToProps,
)(JobsLayout);
