import React from 'react';
import './Insurance.scss';

interface InsuranceProps {
  NextLink?: any,
  onBtnClick: Function,
  insuranceLinks: [
    {
      id: string,
      link: string,
      text: string,
      gtmClassName?: string
    }
  ]
}

export const Insurance = (props: InsuranceProps) => {
  const { onBtnClick, insuranceLinks, NextLink } = props;

  return (
    <div className="insurance">
      <div className="insurance__title">Asuransi Terbaik 2021</div>
      <div className="insurance__subtitle">
        <div>
          Dapatkan <span className="label-discount">DISKON 25%</span> +{' '}
          <span className="label-cashback">CASHBACK 10%</span>{' '}
        </div>
        <div>Daftar sekarang untuk penawaran terbatas</div>
      </div>
      {insuranceLinks && insuranceLinks.map((button) =>
        NextLink ?
          <NextLink href={button.link}>
            <a
              key={button.text}
              title={button.text}
              className={button.gtmClassName}
              onClick={() => onBtnClick()}
            >
              {button.text}
            </a>
          </NextLink> :
          <a
            key={button.text}
            title={button.text}
            href={button.link}
            className={button.gtmClassName}
            onClick={() => onBtnClick()}
          >
            {button.text}
          </a>
      )}
    </div>
  );
};
