import React from 'react';

import { withKnobs, boolean } from "@storybook/addon-knobs";

import { Radio } from '../components/Radio/Radio';

export default {
  title: "Radio",
  decorators: [withKnobs],
};

export const radio = () => {

	const disableLabel = 'Disabled?';
  const disabledDefaultValue = false;

	let disabled = boolean(disableLabel, disabledDefaultValue);

	return (
		<Radio
			id={'story_RadioStory'}
			checked={true}
			disabled={disabled}
			value={'radio'}
			labelName={'radio'}
		/>
	)
};
