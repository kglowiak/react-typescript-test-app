import React, { Component, Fragment } from 'react';

import { JobItem } from './JobItem/index';
import { JobsProps } from './index';

export class JobsLayout extends Component<JobsProps> {
  componentDidMount(): void {
    this.props.fetchJobs();
  }

  render() {
    const { jobs, loading } = this.props;
    return (
      <Fragment>
        <h1>HN Jobs</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          jobs.map(job => <JobItem job={job} key={job.id} />)
        )}
      </Fragment>
    );
  }
}
