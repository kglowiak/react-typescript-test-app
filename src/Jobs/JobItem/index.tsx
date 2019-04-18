import React from 'react';

export const JobItem = ({ job: { id, title } }) => (
  <div>
    {id}:{title}
  </div>
);
