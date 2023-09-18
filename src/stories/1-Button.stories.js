import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { Button } from '../index';

export default {
  title: "Button",
  decorators: [withKnobs]
};

// Knobs as dynamic variables.
export const solidButton = () => {
  const buttonType = 'Button Type';
  const options = {
    Primary: 'primary',
    Default: 'default',
    Danger: 'danger',
    Ghost: 'ghost',
  };
  const defaultButtonType = 'default';
  
  const buttonSize = 'Button Size';
  const buttonSizeOptions = {
    Large: 'lg',
    Medium: 'md',
    Small: 'sm',
  };
  const defaultButtonSize = 'md';
  
  const variant = select(buttonType, options, defaultButtonType);
  const size = select(buttonSize, buttonSizeOptions, defaultButtonSize);

  const label = 'Disable?';
  const defaultValue = false;

  const disabled = boolean(label, defaultValue);

  const sizeModifier = false;
  const sizeModifierLabel = 'isBlock?';

  const isBlock = boolean(sizeModifierLabel, sizeModifier);

  const loadingModifier = false;
  const loadingModifierLabel = 'isLoading?';

  const isLoading = boolean(loadingModifierLabel, loadingModifier);

  return (
    <Button
      variant={variant || defaultButtonType}
      size={size || defaultButtonSize}
      onClick={action('clicked')}
      disabled={disabled}
      isBlock={isBlock}
      isLoading={isLoading}
      loaderColor="#1D66DD"
    >
      {variant} Button
    </Button>
  )
}
