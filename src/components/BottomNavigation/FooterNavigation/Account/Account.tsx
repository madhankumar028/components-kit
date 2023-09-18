import React from 'react';

import './Account.scss';

interface AccountProps {
  NextLink?: any,
  title: string,
  subtitle: string,
  imgSrc: string,
  onBtnClick: Function,
}

export const Account = (props: AccountProps) => {
  const { title, subtitle, imgSrc, onBtnClick, NextLink } = props;

  return (
    <div className='account-box'>
      <div className='account-box_image'>
        <img
          src={imgSrc}
          alt="Lifepal Account"
          width="200px"
          height="200px"
        />
      </div>
      <div className='account-box_title'>{title}</div>
      <div className='account-box_subtitle'>{subtitle}</div>
      {
        NextLink ?
          <>
            <NextLink href="/account/register">
              <a className='account-box_registerBtn' onClick={() => onBtnClick()}>Daftar Akun</a>
            </NextLink>
            <NextLink href="/account/login">
              <a className='account-box_loginBtn' onClick={() => onBtnClick()}>Masuk</a>
            </NextLink>
          </> :
          <>
            <a className='account-box_registerBtn' href="/account/register" onClick={() => onBtnClick()}>Daftar Akun</a>
            <a className='account-box_loginBtn' href="/account/login" onClick={() => onBtnClick()}>Masuk</a>
          </>
      }
    </div>
  );
};
