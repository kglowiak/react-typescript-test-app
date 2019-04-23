import { AppState } from '../reducer';
import { Job } from './models';
import {selectJobs, selectJobsLoading} from './selectors';

describe('jobs selectors', () => {
  const jobListMock: Job[] = [
    {
      type: 'job',
      time: 123455,
      score: 1,
      by: 'test',
      id: 123455,
      title: 'test 1',
      url: 'testurl',
    },
  ];
  const loadingMock = false;
  const stateMock: AppState = {
    jobs: { jobsList: jobListMock, loading: loadingMock },
  };
  describe('selectJobsLoading', () => {
    it('should return loading state', () => {
      expect(selectJobsLoading(stateMock)).toEqual(loadingMock);
    });
  });

  describe('selectJobs', () => {
    it('should return jobList', () => {
      expect(selectJobs(stateMock)).toEqual(jobListMock);
    });
  });
});
