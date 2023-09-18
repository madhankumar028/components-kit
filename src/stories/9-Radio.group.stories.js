import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, select } from "@storybook/addon-knobs";

import { RadioGroup } from "../components/RadioGroup/RadioGroup";
import { Radio } from "../components/Radio/Radio";

export default {
  title: "Radio Group",
  decorators: [withKnobs],
};

// Knobs as dynamic variables.
export const radioGroup = () => {
  const RadioGroupPosition = "Alignment";
  const RadioGroupAlignment = {
    vertical: "vertical",
    horizontal: "horizontal",
  };
	const defaultRadioGroupAlignment = "vertical";
  const alignment = select(RadioGroupPosition, RadioGroupAlignment, defaultRadioGroupAlignment);

  return (
    <RadioGroup id={'story_radiogroup'} groupAlignment={alignment}>
      <Radio
        id={1}
        value={'first_item'}
        labelName={'radio_1'}
        name={'radio'}
        handleOnChange={(event) => console.log(event)}
        className="lp-radio__group--item"
        />
      <Radio
        id={2}
        value={'second_item'}
        labelName={'radio_2'}
        name={'radio'}
        handleOnChange={(event) => console.log(event)}
        className="lp-radio__group--item"
        />
      <Radio
        id={3}
        checked={true}
        value={'third_item'}
        name={'radio'}
        labelName={'radio_3'}
        handleOnChange={(event) => console.log(event)}
        className="lp-radio__group--item"
      />
    </RadioGroup>
  );
};
