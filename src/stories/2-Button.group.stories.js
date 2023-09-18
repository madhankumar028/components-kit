import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { ButtonGroup } from "../components/ButtonGroup/ButtonGroup";
import { Button } from "../components/Button/Button";

export default {
  title: "Button",
  decorators: [withKnobs],
};

// Knobs as dynamic variables.
export const ToggleButton = () => {
  const buttonSize = "Button Size";
  const buttonSizeOptions = {
    Large: "lg",
    Medium: "md",
    Small: "sm",
  };
	const defaultButtonSize = "md";
  const size = select(buttonSize, buttonSizeOptions, defaultButtonSize);
	
	const compressedButtonGroup = 'Un-Compressed?';
  const defaultValue = true;

  const uncompressed = boolean(compressedButtonGroup, defaultValue);
  
  const filledButtonGroup = 'Filled?';
  const filledButtonGroupValue = false;

  const filled = boolean(filledButtonGroup, filledButtonGroupValue);

  return (
    <ButtonGroup uncompressed={uncompressed} filled={filled}>
      <Button
        variant="default"
        size={size || defaultButtonSize}
        onClick={action("clicked")}
        className="lp-button__group--item"
        id="1"
      >
        First Button
      </Button>
      <Button
        variant="default"
        size={size || defaultButtonSize}
        onClick={action("clicked")}
        className="lp-button__group--item"
        id="2"
      >
        Second Button
      </Button>
      <Button
        variant="default"
        size={size || defaultButtonSize}
        onClick={action("clicked")}
        className="lp-button__group--item"
        id="3"
      >
        Third Button
      </Button>
    </ButtonGroup>
  );
};
