import React from 'react';

import classNames from 'classnames';

import './Tabs.scss';

export const Tab = (props) => {
  const { label, onClick, activeTab } = props;

  const clickHandler = () => {
    onClick(label);
  };

  return (
    <li
      className={classNames('lp__tab__list--item', activeTab === label && 'lp__tab__list--active')}
      onClick={clickHandler}
    >
      {label}
    </li>
  );
};
