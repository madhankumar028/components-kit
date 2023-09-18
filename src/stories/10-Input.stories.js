import React from 'react';

import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";

import { Input } from '../components/Input';

export default {
  title: "Input",
  decorators: [withKnobs],
  parameters: {
    zeplinLink: "https://app.zeplin.io/project/5cd83b7127264913e931404a/screen/5d304f19e1eb418dddec4506",
  },
};

export const input = () => {
  
  const [userInput, setUserInput] = React.useState('');
  
  const inputType = 'Input Type';
  const options = {
    Text: 'text',
    Tel: 'tel',
    Number: 'number',
    Email: 'email',
    Decimal: 'decimal',
    Search: 'search',
    Password: 'password'
  };
  const defaultInputType = 'text';
  
  const inputMode = 'Input Mode';
  const inputModeOptions = {
    Text: 'text',
    Tel: 'tel',
    Number: 'number',
    Email: 'email',
    Decimal: 'decimal',
    Search: 'search',
  };
  const defaultInputMode = 'text';
  
  const inputSize = 'Input Size';
  const inputSizeOptions = {
    Large: 'lg',
    Medium: 'md',
    small: 'sm',
  };
  const defaultInputSize = 'sm';
  
  const inputTypeVariant = select(inputType, options, defaultInputType);
  const inputTypeMode = select(inputMode, inputModeOptions, defaultInputMode);
  const size = select(inputSize, inputSizeOptions, defaultInputSize);
  
  const label = 'Disable?';
  const defaultValue = false;
  
  const disabled = boolean(label, defaultValue);
  
  const shoudShowError = false;
  const errorModifierLabel = 'Error?';
  
  const isError = boolean(errorModifierLabel, shoudShowError);
  
  const loadingModifier = false;
  const loadingModifierLabel = 'isLoading?';
  
  const isLoading = boolean(loadingModifierLabel, loadingModifier);
  
  const currencyModifier = false;
  const currencyModifierLabel = 'isCurrency?';
  
  const isCurrency = boolean(currencyModifierLabel, currencyModifier);
  
  const placeholder = text('Plaeholder', 'Username');
  
  return (
    <Input
      id={'story_input'}
      type={inputTypeVariant}
      onChange={(event) => {
        event.persist();
        setUserInput(event.target.value);
      }}
      placeholder={placeholder}
      inputMode={inputTypeMode}
      name={placeholder}
      disabled={disabled}
      size={size}
      isLoading={isLoading}
      loaderColor="#1D66DD"
      error={isError}
      isCurrency={isCurrency}
      defaultValue="test"
      isRequired
    />
  )
}
  