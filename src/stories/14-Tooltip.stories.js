import React from 'react';

import { withKnobs, select } from "@storybook/addon-knobs";

import { Tooltip } from '../components/Tooltip';

export default {
  title: "Tooltip",
  decorators: [withKnobs],
};

export const tooltip = () => {
  const tooltipPosition = 'Input Size';
  const positionOptions = {
    top: 'top',
    right: 'right',
    bottom: 'bottom',
    left: 'left',
  };
  const defaultPosition = 'right';
  
  const position = select(tooltipPosition, positionOptions, defaultPosition);

  return (
    <Tooltip
      position={position}
      tooltipItem="Hover me!"
      tooltipBox={<div>Tooltip info!</div>}
    />
  );
};
