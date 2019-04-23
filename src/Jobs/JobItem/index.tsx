import React from 'react';
import styled from '@emotion/styled';
import { format } from 'date-fns';

import { Job } from '../../store/jobs/models';
import { Color, dateFormat } from '../../variables';

export type JobItemProps = {
  job: Job;
};

const StyledJobItemContainer = styled.div`
  border-bottom: 1px solid ${Color.Border};
  padding: 5px;
  margin-bottom: 1px;
  color: ${Color.FontPrimary};
`;

const StyledJobItemTitle = styled.a`
  font-size: 16px;
  display: block;
  text-decoration: none;
  color: ${Color.FontPrimary};
`;

const StyledJobItemDetails = styled.div`
  font-size: 12px;
`;

export const JobItem = ({ job: { by, time, url, title } }: JobItemProps) => (
  <StyledJobItemContainer>
    <StyledJobItemTitle href={url} target="_blank">
      {title}
    </StyledJobItemTitle>

    <StyledJobItemDetails>
      Added by {by} at {format(time * 1000, dateFormat)}
    </StyledJobItemDetails>
  </StyledJobItemContainer>
);
