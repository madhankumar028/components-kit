import React, { useEffect, useState } from 'react';
import Header from './Header';
import { handlePhoneNumber } from '../../utils/handlePhoneNumber';
import { useLoginContext } from '.';
import { Button, Input } from '../..';

interface LoginFormProps {
  previous?: string;
  isModal: boolean;
}

export const LoginForm = (props: LoginFormProps) => {
  const { previous, isModal } = props;
  const [send, setSend] = useState<boolean>(false);
  const [phoneNum, setPhoneNum] = useState('');

  const {
    backToPrev, emailIconSrc, googleIconSrc, errorMessage,
    phoneNumber, sendOtp, loginWithGoogle, closeModalClick,
    buttonNextId, googleButtonLoading, nextButtonLoading, goToRegister
  } = useLoginContext();

  const getOtp = async () => {
    try {
      const phoneValid: boolean = await sendOtp(handlePhoneNumber(phoneNum));
      setSend(true);
      if (phoneValid) {
        backToPrev('otp')
      }
    } catch (error) {
      console.log(error)
      return;
    }
  };

  useEffect(() => {
    if (send) {
      if (!errorMessage.phoneNumber && phoneNum !== '') {
        backToPrev('otp');
      } else {
        setSend(false);
      }
    }
  }, [send]);

  return (
    <>
      {!isModal && <Header showBackBtn={false} isModal={isModal} onBackBtnClick={()=> backToPrev(previous)} />}
      <div className={isModal ? 'form--modal' : 'form'}>
        {isModal && <Header showBackBtn={false} isModal={isModal} onBackBtnClick={()=> backToPrev(previous)} />}
        <Input
          id='input-phone-number'
          name='input-phone-number'
          type='tel'
          inputMode='tel'
          placeholder='Nomor Handphone'
          size='lg'
          className={`${(errorMessage && errorMessage.phoneNumber) ? 'input-error' : 'bottom-18p'}`}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneNum(e.target.value)}
          disabled={nextButtonLoading || googleButtonLoading}
        />
        {errorMessage && errorMessage.phoneNumber &&
          <p className='text-error bottom-18p top-5p'>
            {errorMessage.phoneNumber}
          </p>
        }
        <Button
          id={buttonNextId || 'next-to-otp'}
          isLoading={nextButtonLoading || googleButtonLoading}
          className={`
            action-button bottom-16p ${(nextButtonLoading || googleButtonLoading) ? 'button-action-disabled' : ''}
          `}
          onClick={() => { getOtp().then(() => { setSend(true); }); }}
        >
          Selanjutnya
        </Button>
        <div className='or bottom-16p'>
          <div className='divider' />
          <span>atau masuk dengan</span>
          <div className='divider' />
        </div>
        <Button
          id='login-by-email'
          className={`
            redirect-button bottom-16p ${(nextButtonLoading || googleButtonLoading) ? 'button-disabled' : ''}
          `}
          isLoading={nextButtonLoading || googleButtonLoading}
          onClick={() => backToPrev('login-email')}
        >
          <div className='right-5p d-flex'><img src={emailIconSrc} alt='mail' /></div>
          Masuk Menggunakan Email
        </Button>
        <Button
          id='login-by-google'
          className={`redirect-button ${(googleButtonLoading || nextButtonLoading) ? 'button-disabled' : ''}`}
          isLoading={googleButtonLoading || nextButtonLoading}
          onClick={loginWithGoogle}
        >
          <div className='right-5p d-flex'><img src={googleIconSrc} alt='google' /></div>
          Masuk Menggunakan Gmail
        </Button>
        <div className='regis__text'>Belum memiliki akun ? <a onClick={goToRegister} className='go_to_regis'>Daftar Sekarang</a> </div>
      </div>
    </>
  );
};
