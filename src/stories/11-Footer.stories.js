import React from "react";

import { boolean, withKnobs } from "@storybook/addon-knobs";

import { Footer } from "../components/Footer/";
import image1 from '../assets/group_6410.png';

export default {
  title: "Footer",
  decorators: [withKnobs],
  parameters: {
    zeplinLink: "https://app.zeplin.io/project/5cd83b7127264913e931404a/screen/5efaf2061cb8dea131d40b80",
  },
};

export const footer = () => {

  const label = 'isAgent?';
  const defaultValue = false;
  const isAgent = boolean(label, defaultValue);

  const showRegFooterlabel = 'showRegularFooter';
  const defaultValueRegFooter = true;
  const showRegularFooter = boolean(showRegFooterlabel, defaultValueRegFooter);

  const showBengkelFooterlabel = 'showBengkelFooter';
  const defaultValueBengkelFooter = false;
  const showBengkelFooter = boolean(showBengkelFooterlabel, defaultValueBengkelFooter);

  return (
    <Footer
      isAgent={isAgent}
      footerImage={image1}
      showRegularFooter={showRegularFooter}
      showBengkelFooter={showBengkelFooter}
    />
  );
};
