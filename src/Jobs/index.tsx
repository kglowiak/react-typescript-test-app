import React, { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {fetchJobInfo, fetchJobsList} from '../store/jobs/actions';
import { JobItem } from './JobItem/index';
import { selectJobs } from '../store/jobs/selectors';
import { AppState } from '../store/reducer';

export class JobsBase extends Component {
  componentDidMount(): void {
    this.props.fetchJobs();
  }

  render() {
    return (
      <div>
        {this.props.jobs.map(job => (
          <JobItem job={job} key={job.id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  jobs: selectJobs(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      fetchJobs: fetchJobsList,
      fetchJob: fetchJobInfo,
    },
    dispatch,
  );

export const Jobs = connect(
  mapStateToProps,
  mapDispatchToProps,
)(JobsBase);
