import React from 'react';

import { Tabs } from '../components/Tabs/Tabs';

export default {
  title: "Tabs",
};

export const tabs = () => {
  return (
    <Tabs>
      <div label="Asuransi">
        Asuransi, <em>Asuransi</em>!
      </div>
      <div label="Lifepal">
        After 'while, <em>Lifepal</em>!
      </div>
      <div label="Policy">
        Nothing to see here, this tab is <em>extinct</em>!
      </div>
      <div label="klaim">
        After 'while, <em>Crocodile</em>!
      </div>
      <div label="Asuransi1">
        Asuransi, <em>Asuransi</em>!
      </div>
      <div label="Lifepal1">
        After 'while, <em>Lifepal</em>!
      </div>
      <div label="Policy1">
        Nothing to see here, this tab is <em>extinct</em>!
      </div>
      <div label="klaim1">
        After 'while, <em>Crocodile</em>!
      </div>
    </Tabs>
  )
};
