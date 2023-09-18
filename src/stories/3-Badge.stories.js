import React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";

import { Badge } from '../components/Badge/Badge';

export default {
  title: "Badge",
  decorators: [withKnobs],
};

export const badge = () => {
	const badgeType = 'Badge Type';
  const options = {
    Primary: 'primary',
    Default: 'default',
    Danger: 'danger',
    Success: 'success',
    Warning: 'warning',
  };
  const defaultBadgeType = 'default';
  
  const badgeSize = 'Badge Size';
  const badgeSizeOptions = {
    Medium: 'md',
    Small: 'sm',
  };
  const defaultBadgeSize = 'md';
  
  const status = select(badgeType, options, defaultBadgeType);
  const size = select(badgeSize, badgeSizeOptions, defaultBadgeSize);

  return (
    <Badge
      status={status || defaultBadgeType}
			size={size || defaultBadgeSize}
			title={'test'}
    />
  )
}

