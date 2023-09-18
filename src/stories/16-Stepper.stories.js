import React from 'react';

import { Stepper } from '../components/Stepper/Stepper';

export default {
  title: "Stepper",
};

export const stepper = () => {
  const stepperDetails = [
    {
      count: 1,
      title: 'Test data',
      subtitle: 'Test subtitle',
    },
    {
      count: 2,
      title: 'Test data',
      subtitle: 'Test subtitle',
    },
    {
      count: 3,
      title: 'Test data',
      subtitle: 'Test subtitle',
    },
    {
      count: 4,
      title: 'Test data',
      subtitle: 'Test subtitle',
    }
  ];

  return (
    <Stepper stepperDetails={stepperDetails} />
  )
};
