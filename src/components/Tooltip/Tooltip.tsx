// Generated with utils/create-component.js
import React from "react";

import className from 'classnames';

import "./Tooltip.scss";

interface ITooltip {
  tooltipItem: string;
  tooltipBox: React.ReactChildren
};

export const Tooltip = ({
  tooltipItem,
  tooltipBox,
  position,
}) => {
  return (
    <div className="lp__tooltip--container">
      {tooltipItem}
      <div className={className('lp__tooltip', `lp__tooltip--${position}`)}>{tooltipBox}</div>
    </div>
  )
};
