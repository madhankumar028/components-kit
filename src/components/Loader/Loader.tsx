import React, { SFC, HTMLAttributes } from 'react';
import classNames from 'classnames';

import './Loader.scss';
import '../Button/helper.scss';

type loaderSize = 'small' | 'large' | 'medium';

interface IconProps extends HTMLAttributes<HTMLButtonElement> {
  size?: loaderSize,
  loaderColor?: string;
  spaceBtwText: string;
};

export const Loader: SFC<IconProps> = ({ loaderColor, size, spaceBtwText }) => {

  const loaderAlphaValue = loaderColor + '00';
  const defaultColorAlphaValue = '#fff33';

  return (
    <div
      className={classNames('lp-loader', [size && `loader--${size}`])}
      style={{
        borderColor: loaderColor ? loaderColor : '#fff',
        borderTopColor: loaderColor ? loaderAlphaValue : defaultColorAlphaValue,
        ...(spaceBtwText ? { margin : '0', marginLeft: spaceBtwText} : {})
      }}
    >
      <span />
    </div>
  );
}