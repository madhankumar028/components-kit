import React from 'react';
import { withKnobs, boolean, text } from "@storybook/addon-knobs";

import { SEOAccordion } from '../components/SEOAccordion';

export default {
  title: "SEOAccordion",
  decorators: [withKnobs],
};

export const SEOaccordion = (props) => {

  const isMultiOpenLabel = 'isMultiOpen?';
  const hasBorderLabel = 'hasBorder';
  const defaultValue = false;

  const isMultiOpen = boolean(isMultiOpenLabel, defaultValue);
  const hasBorder = boolean(hasBorderLabel, defaultValue);
  const arrowPosition = text("arrowPosition", "left");

  const accordionList = [
    {
      id: '1',
      title: "Mobil Asuransi!",
      body: () => (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        </div>
      ),
      isH3: true,
      hasSchemaOrFaq: true
    },
    {
      id: '2',
      title: "Moto Asuransi!",
      body: () => (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        </div>
      ),
    },
    {
      id: '3',
      title: "Syariah Asuransi!",
      body: () => (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        </div>
      ),
    },
    {
      id: '4',
      title: "Jiwa Asuransi!",
      body: () => (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        </div>
      ),
    },
  ];

  return (
    <div >
      <SEOAccordion
        accordionList={accordionList}
        isMultipleOpen={isMultiOpen}
        hasBorder={hasBorder}
        arrowPosition={arrowPosition}
      />
    </div>
  )
};
