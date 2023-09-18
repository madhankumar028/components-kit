import React from 'react';

import { Switch } from '../components/Switch/Switch';

export default {
  title: "Toggle",
};

export const toggle = () => {
  return (
    <Switch
      id={'story_switch'}
      textPair={{on: 'Online', off: 'Offline'}}
      defaultStatus={true}
      emitSwitchStatus={(switchStatus) => console.log(switchStatus)}
      showText
    />
  )
};
