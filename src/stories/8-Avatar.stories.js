import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { Avatar } from '../components/Avatar';

export default {
  title: "Avatar",
  decorators: [withKnobs]
};

export const avatar = () => {
  const avatarSize = 'Avatar Size';
  const AvatarSizOptions = {
    '12px': '12px',
    '24px': '24px',
    '32px': '32px',
  };
  const defaultAvatarSize = '24px';
  const size = select(avatarSize, AvatarSizOptions, defaultAvatarSize);

  const label = 'isCircle?';
  const defaultValue = false;
  const isCircle = boolean(label, defaultValue);

  return (
    <Avatar
      size={size || defaultAvatarSize}
      isCircle={isCircle}
      alt={'avatar'}
      src={'https://www.endeavorcareers.com/wp-content/uploads/2017/03/default-profile-pic.png'}
    />
  );
};
