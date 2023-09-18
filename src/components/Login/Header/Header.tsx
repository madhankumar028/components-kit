import React from 'react';
import { useLoginContext } from '../Login';
import './Header.scss';

interface HeaderProps {
  showBackBtn: boolean;
  onBackBtnClick?: () => void;
  isModal: boolean;
  showCloseModalBtn?: boolean;
}

const Header = (props: HeaderProps) => {
  const { showBackBtn, onBackBtnClick, isModal, showCloseModalBtn = true } = props;
  const { closeModalClick } = useLoginContext();
  const { backIconSrc, title } = useLoginContext();

  return (
    <div className='login__header'>
      {showBackBtn &&
        <div className={isModal ? 'back--modal' : 'back'} onClick={onBackBtnClick}>
          <i className={backIconSrc || 'lifepal__icon lifepal__icon--arrow-left-blue'} />
        </div>}
      <p className={isModal ? "title__modal" : "title"}>{title || 'Selamat Datang'}</p>
      {isModal && showCloseModalBtn && <button className='close-btn' onClick={closeModalClick}>&#10005;</button>}
    </div>
  );
};

export default Header;