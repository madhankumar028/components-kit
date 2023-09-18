import React from "react";
import classNames from 'classnames';

import './Badge.scss';

type Status = "success" | "primary" | "danger" | "warning" | "default";
type Size = "small" | "medium";

interface BadgeProps {
  className?: string;
  status?: Status;
  size?: Size;
  title?: string;
};

export const Badge = ({
  title,
  className,
  status,
  size,
}: BadgeProps) => (
  <div
    data-testid="badge__component"
    className={
      classNames(`badge`, [size && `lp-badge--${size}`, status && `lp-badge--${status}`, className && className])
    }
  >
    <span className='badge__title'>{title}</span>
  </div>
);
