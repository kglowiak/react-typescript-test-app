import React, { FC } from 'react';
import styled from '@emotion/styled';

import { Jobs } from './Jobs/index';

const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans', sans-serif;
  max-width: 1200px;
`;

export const App: FC<{}> = () => (
  <StyledAppContainer>
    <Jobs />
  </StyledAppContainer>
);
