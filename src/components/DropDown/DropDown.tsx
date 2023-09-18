import React from 'react';
import './DropDown.scss';

import classNames from 'classnames';

export const DropDown = (props) => {
  const { id, label, className, name, list } = props;

  return (
    <div className={classNames('dropDown', className)}>
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} required>
        {list.map(
          (brand) =>
            <option value={brand.value} key={brand.value}>{brand.label}</option>
        )}
      </select>
    </div>
  )
};