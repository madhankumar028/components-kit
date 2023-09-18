import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { Icon } from '../components/Icon/Icon';

export default {
  title: "Button",
  decorators: [withKnobs]
};

// Knobs as dynamic variables.
export const IconButton = () => {
  const buttonType = 'Button Type';
  const options = {
    Primary: 'primary',
    Danger: 'danger',
  };
  const defaultButtonType = 'primary';

  const variant = select(buttonType, options, defaultButtonType);

  const label = 'Disable?';
  const defaultValue = false;

  const disabled = boolean(label, defaultValue);

  return (
    <Icon
      variant={variant || defaultButtonType}
      onClick={action('clicked')}
      disabled={disabled}
    >
      {variant} Button
    </Icon>
  )
}
