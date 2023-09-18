import React, { MouseEvent, SFC, HTMLAttributes } from 'react';
import classNames from 'classnames';

import './Icon.scss';
import '../Button/helper.scss';

type IconVariant = 'primary' | 'secondary' | 'danger' | 'ghost' | 'default';

interface IconProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: IconVariant;
  disabled?: boolean;
  className?: string;
  fontName?: string;
  tabIndex?: number;
  onClick(e: MouseEvent<HTMLElement>): void;
  noContent?: boolean;
}

export const Icon: SFC<IconProps> = ({
  variant,
  disabled,
  className,
  fontName,
  tabIndex,
  onClick,
  noContent = false,
}) => (
  <button
    disabled={disabled}
    tabIndex={tabIndex}
    onClick={(event) => onClick(event)}
    className={classNames(
      `lp-icon ${fontName ? `lp-icon--${fontName}` : undefined} ${
        className ? className : undefined
      }`,
      [variant && `lp-icon--${variant}`]
    )}
  >
    {!noContent && (
      <span>
        {fontName && (
          <i
            className={classNames(
              `lp-icon ${fontName ? `lp-icon--${fontName}` : undefined} ${
                className ? className : undefined
              }`,
              [variant && `icon--${variant}`]
            )}
          />
        )}
        {!fontName && (
          <img
            src="https://lifepal.co.id/static/images/icons/compare.svg"
            alt="icon"
          />
        )}
      </span>
    )}
  </button>
);
