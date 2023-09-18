import React from "react";

import { text, select, withKnobs, boolean } from "@storybook/addon-knobs";

import { Alert } from "../components/Alert";

export default {
  title: "Alert",
  decorators: [withKnobs],
};

const alertList = [
  {
    id: 1,
    title: '',
    description: 'Terjadi kesalahan pada sistem, silakan coba beberapa saat lagi',
    type: 'error'
  },
  {
    id: 2,
    title: 'Success',
    description: 'Terjadi kesalahan pada sistem, silakan coba beberapa saat lagi',
    type: 'success'
  },
  {
    id: 3,
    title: 'Warning',
    description: 'Terjadi kesalahan pada sistem, silakan coba beberapa saat lagi',
    type: 'warning'
  },
  {
    id: 4,
    title: 'Info',
    description: 'Terjadi kesalahan pada sistem, silakan coba beberapa saat lagi',
    type: 'info'
  },
];

export const alert = () => {

  const alertPosition = select(
    "Alert Position",
    {
      "Top-Right": "top-right",
      "Top-Left":"top-left",
      "Bottom-Right" : "bottom-right",
      "Bottom-Left": "bottom-left"
    },
    "top-right"
  );

  const autoClose = boolean('AutoClose', false);
  const autoCloseTime = text('AutoCloseTime', 200);

  return (
    <Alert
      position={alertPosition}
      alertList={alertList}
      autoClose={autoClose}
      autoCloseTime={autoCloseTime}
      alertClose={(id) => console.log(`alert id: ${id} is removed`)}
    />
  );
};
