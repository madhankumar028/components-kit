import React from 'react';

import { withKnobs, boolean } from "@storybook/addon-knobs";

import { Checkbox } from '../components/Checkbox/Checkbox';

export default {
  title: "Checkbox",
  decorators: [withKnobs],
};

export const checkbox = () => {

	const disableLabel = 'Disabled?';
  const disabledDefaultValue = false;

	let disabled = boolean(disableLabel, disabledDefaultValue);

  return (
		<Checkbox
			id={'story_checkbox'}
			checked={true}
			disabled={disabled}
			value={'test checkbox'}
			labelName={'test checkbox'}
		/>
	)
}
