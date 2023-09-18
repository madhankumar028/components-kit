import React, { useState } from 'react';
import Header from './Header';
import { useLoginContext } from '.';
import { Button, Input } from '../..';

interface LoginEmailFormProps {
  previous?: string;
  isModal: boolean;
}

export const LoginEmailForm = (props: LoginEmailFormProps) => {
  const { previous, isModal } = props;
  const {
    goToRegister, goToForgetPassword, errorMessage, loginWithEmail,
    showPasswordIcon, hidePasswordIcon, backToPrev
  } = useLoginContext();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <>
      {!isModal && <Header showBackBtn={true} isModal={isModal} onBackBtnClick={()=> backToPrev(previous)} />}
      <div className={isModal ? 'form--modal' : 'form'}>
        {isModal && <Header showBackBtn={true} isModal={isModal} onBackBtnClick={()=> backToPrev(previous)} />}
        <Input
          id='input-email'
          name='input-email'
          type='text'
          inputMode='text'
          value={email}
          size='lg'
          placeholder='Email / No. Telp'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value); }}
          className={`${(errorMessage && errorMessage.email) ? 'input-error' : 'bottom-18p'}`}
        />
        {errorMessage && errorMessage.email &&
          <p className='text-error bottom-18p top-5p'>
            {errorMessage.email}
          </p>
        }
        <div className='input-password'>
          <Input
            id='input-password'
            name='input-password'
            type={showPassword ? 'text' : 'password'}
            inputMode='text'
            value={password}
            size='lg'
            placeholder='Password'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value); }}
            className={(errorMessage && errorMessage.password) ? 'input-error' : ' bottom-8p'}
          />
          <span className='action-password' onClick={() => { setShowPassword(!showPassword); }}>
            {showPassword ? hidePasswordIcon || 'hide' : showPasswordIcon || 'show'}
          </span>
        </div>
        {errorMessage && errorMessage.password &&
          <p className='text-error bottom-8p top-5p'>
            {errorMessage.password}
          </p>
        }
        {goToForgetPassword &&
          <div className='bottom-16p text-right forgot-password'>
            <span id='redirect-to-forget-password' onClick={goToForgetPassword}>Lupa Password?</span>
          </div>
        }
        <Button
          id='button-login'
          className='action-button bottom-16p'
          onClick={() => { loginWithEmail({ email, password }); }}
        >
          Masuk
        </Button>
        {goToRegister &&
          <div className='text-center register-now'>
            <span>Belum Punya Akun?</span><span id='redirect-to-register' onClick={goToRegister} className='go_to_regis'> Daftar Sekarang</span>
          </div>
        }
      </div>
    </>
  );
};
