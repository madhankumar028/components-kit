import React from 'react';
import { DropDown } from '../components/DropDown';

export default {
  title: "Drop Down",
};

export const dropDown = () => {
  const arr = [
    {
      id: "id1",
      value: "value1"
    },
    {
      id: "id2",
      value: "value2"
    },
    {
      id: "id3",
      value: "value3"
    },
  ]

  return (
    <div>
        <DropDown
          id={'story_dropdown'}
          label="Pick one: "
          name="DropDown"
          value="Dropdown"
          list={arr}
        />
    </div>
  )
}